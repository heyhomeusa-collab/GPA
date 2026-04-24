import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const ALLOWED_TERMS = new Set(['Spring 2026', 'Summer 2026', 'Fall 2026', 'Spring 2027']);
const ALLOWED_LEVELS = new Set([
  'Beginner (A1-A2)',
  'Intermediate (B1-B2)',
  'Advanced (C1-C2)',
]);
const ALLOWED_PROGRAMS = new Set(['Short-Term', 'Long-Term', 'Professional']);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_ATTEMPTS = 5;
const rateLimiter = new Map<string, number[]>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DOB_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const WHATSAPP_REGEX = /^\+?\d{7,15}$/;

function normalizeString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getClientIp(request: VercelRequest): string {
  const forwarded = request.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].split(',')[0].trim();
  }
  return request.socket.remoteAddress ?? 'unknown';
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (rateLimiter.get(key) ?? []).filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimiter.set(key, recent);
  return recent.length > RATE_LIMIT_MAX_ATTEMPTS;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    if (!resend) {
      console.error('Missing RESEND_API_KEY');
      return response.status(500).json({ error: 'Email service not configured.' });
    }

    const contentType = request.headers['content-type'] ?? '';
    if (typeof contentType === 'string' && !contentType.includes('application/json')) {
      return response.status(415).json({ error: 'Content-Type must be application/json.' });
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return response.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const {
      fullName,
      email,
      whatsapp,
      dob,
      country,
      term,
      level,
      course,
      website,
    } = request.body;

    // Honeypot: bots often fill hidden fields.
    if (normalizeString(website)) {
      return response.status(200).json({ success: true });
    }

    const cleanFullName = normalizeString(fullName);
    const cleanEmail = normalizeString(email).toLowerCase();
    const cleanWhatsapp = normalizeString(whatsapp);
    const cleanDob = normalizeString(dob);
    const cleanCountry = normalizeString(country);
    const cleanTerm = normalizeString(term);
    const cleanLevel = normalizeString(level);
    const cleanCourse = normalizeString(course);

    if (!cleanFullName || !cleanEmail || !cleanCountry || !cleanTerm || !cleanLevel || !cleanCourse) {
      return response.status(400).json({ error: 'Missing required fields.' });
    }

    if (cleanFullName.length < 2 || cleanFullName.length > 120) {
      return response.status(400).json({ error: 'Invalid full name.' });
    }

    if (!EMAIL_REGEX.test(cleanEmail) || cleanEmail.length > 254) {
      return response.status(400).json({ error: 'Invalid email address.' });
    }

    if (cleanWhatsapp && (!WHATSAPP_REGEX.test(cleanWhatsapp) || cleanWhatsapp.length > 16)) {
      return response.status(400).json({ error: 'Invalid WhatsApp number.' });
    }

    if (cleanDob) {
      if (!DOB_REGEX.test(cleanDob)) {
        return response.status(400).json({ error: 'Invalid date of birth format.' });
      }
      const [y, m, d] = cleanDob.split('-').map(Number);
      const birthDate = new Date(y, m - 1, d);
      const isValidDate =
        birthDate.getFullYear() === y &&
        birthDate.getMonth() === m - 1 &&
        birthDate.getDate() === d;
      if (!isValidDate) {
        return response.status(400).json({ error: 'Invalid date of birth.' });
      }
    }

    if (cleanCountry.length < 2 || cleanCountry.length > 80) {
      return response.status(400).json({ error: 'Invalid country.' });
    }

    if (!ALLOWED_TERMS.has(cleanTerm)) {
      return response.status(400).json({ error: 'Invalid term.' });
    }

    if (!ALLOWED_LEVELS.has(cleanLevel)) {
      return response.status(400).json({ error: 'Invalid level.' });
    }

    if (!ALLOWED_PROGRAMS.has(cleanCourse)) {
      return response.status(400).json({ error: 'Invalid program.' });
    }

    const htmlContent = `
      <h1>New Enrollment Submission</h1>
      <p>A new student has submitted their enrollment details.</p>
      <ul>
        <li><strong>Full Name:</strong> ${escapeHtml(cleanFullName)}</li>
        <li><strong>Email:</strong> ${escapeHtml(cleanEmail)}</li>
        <li><strong>WhatsApp:</strong> ${escapeHtml(cleanWhatsapp || 'N/A')}</li>
        <li><strong>Date of Birth:</strong> ${escapeHtml(cleanDob || 'N/A')}</li>
        <li><strong>Country:</strong> ${escapeHtml(cleanCountry)}</li>
        <li><strong>Term:</strong> ${escapeHtml(cleanTerm)}</li>
        <li><strong>Level:</strong> ${escapeHtml(cleanLevel)}</li>
        <li><strong>Program:</strong> ${escapeHtml(cleanCourse)}</li>
      </ul>
    `;

    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'GPA Enrollment <onboarding@resend.dev>',
      to: ['globalpacademy1@gmail.com'],
      replyTo: cleanEmail, // Allows you to click "Reply" and message the student directly
      subject: `New Lead: ${cleanFullName} - GPA English Institute`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return response.status(400).json({ 
        success: false, 
        error: error.message,
        details: 'If you are in Sandbox mode, you can only send to the email you signed up with.'
      });
    }

    return response.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('System error sending email:', error);
    return response.status(500).json({ 
      error: 'Failed to send email',
      message: error.message 
    });
  }
}
