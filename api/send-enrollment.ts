import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const {
      fullName,
      email,
      whatsapp,
      dob,
      country,
      term,
      level,
      course,
    } = request.body;

    // Validate minimally that required items are there
    if (!fullName || !email) {
      return response.status(400).json({ error: 'Missing full name or email.' });
    }

    const htmlContent = `
      <h1>New Enrollment Submission</h1>
      <p>A new student has submitted their enrollment details.</p>
      <ul>
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>WhatsApp:</strong> ${whatsapp || 'N/A'}</li>
        <li><strong>Date of Birth:</strong> ${dob || 'N/A'}</li>
        <li><strong>Country:</strong> ${country || 'N/A'}</li>
        <li><strong>Term:</strong> ${term || 'N/A'}</li>
        <li><strong>Level:</strong> ${level || 'N/A'}</li>
        <li><strong>Program:</strong> ${course || 'N/A'}</li>
      </ul>
    `;

    // Send the email to the destination address specified
    const data = await resend.emails.send({
      from: 'GPA Enrollment <onboarding@resend.dev>', // You should verify a custom domain via Resend, but onboarding@resend.dev is the default testing address
      to: 'gpacademy1@gmail.com', // Set destination directly via hardcode, or process.env.SALES_EMAIL as an alternative
      subject: `New Lead: ${fullName} - GPA English Institute`,
      html: htmlContent,
    });

    return response.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return response.status(500).json({ error: 'Failed to send email' });
  }
}
