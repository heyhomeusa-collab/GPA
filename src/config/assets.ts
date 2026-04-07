/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Toggle this to `true` once your files are uploaded to Vercel to switch from placeholders to live assets!
export const USE_VERCEL_BLOB = true;

const VERCEL_BASE_URL = 'https://pe7rgoqwih1pjfz0.public.blob.vercel-storage.com';

export const VERCEL_ASSETS = {
  hero: {
    globalCommunity: `${VERCEL_BASE_URL}/1hero/hero1.jpg`,
    floridaCampus: `${VERCEL_BASE_URL}/1hero/hero2.jpg`,
  },
  video: {
    thumbnail: `${VERCEL_BASE_URL}/2vid/thumb.jpg`,
    source: `${VERCEL_BASE_URL}/2vid/video2.mp4`,
  },
  programs: {
    beginner: `${VERCEL_BASE_URL}/5eli/eli1.jpg`, 
    intermediate: `${VERCEL_BASE_URL}/5eli/eli2.jpg`,
    advanced: `${VERCEL_BASE_URL}/5eli/eli3.jpg`,
  },
  carrousel: Array.from({ length: 46 }, (_, i) => `${VERCEL_BASE_URL}/3carr/carr${i + 1}.jpg`),
  interviews: [
    { thumbnail: `${VERCEL_BASE_URL}/7inter/int1.jpg`, video: `${VERCEL_BASE_URL}/2vid/video2.mp4` }, // Reusing main video if only thumbnails provided
    { thumbnail: `${VERCEL_BASE_URL}/7inter/int2.jpg`, video: `${VERCEL_BASE_URL}/2vid/video2.mp4` },
    { thumbnail: `${VERCEL_BASE_URL}/7inter/int3.jpg`, video: `${VERCEL_BASE_URL}/2vid/video2.mp4` },
  ],
  testimonials: Array.from({ length: 20 }, (_, i) => `${VERCEL_BASE_URL}/6rev/c${i + 1}.jpg`),
  form: {
    mainStudent: `${VERCEL_BASE_URL}/8form/form1.jpg`,
    polaroid1: `${VERCEL_BASE_URL}/8form/form2.jpg`,
    polaroid2: `${VERCEL_BASE_URL}/8form/form3.jpg`,
  },
  gpa: {
    main: `${VERCEL_BASE_URL}/4gpa/gpa1.jpg`,
  }
};

const FALLBACK_ASSETS = {
  hero: {
    globalCommunity: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt4FFP6RxPsJapd9NXzuwwOsl76ILaHuQbgkWLs_aM6JbvfRQyZWFjUeRYNAHwN-04woT-aXsTn-vLelVGy6dYTjUV2iqdNHYLrP3mtlr5VH9Y574CUluH93bu5w4tiifpGKol8YbnktZU5bruhqfTlq3j4XV4O3v6EPr8bnM8PGuRq7geLtDZZGojbMO7f0GvBg4I9EnVotWr9Ldrq4CRr9nKuONcJ0NpGvrctUfAdVBxnTD2sWPNVXB8kji6P9Rd1TeSFaLltU1Z",
    floridaCampus: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoWO6SfgBN2hE3uFtGtbb9mn1AYpDxcu2D_h2I3fN3okbgmrdYCMmN-UT_M3NV2yzLSJNgjL8Mtu6mUAnhdZomHoHS6HLe1y9BoxbSmfSLXqJgqyfNT95luCAA-QoQ8N7zvZl5VTE4NP4VqYaiv9q1w982YErx01x3l65hnIZtQO-QxZcDCDKcvLRr3CnnUAXgv18tN59mowvDgA4Fh_3byYRD0hngR1IxtI8ZxOTSHuj-RqO0K7nQXevvuOk_CY3VA4PXl5d5DVcA",
  },
  video: {
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt4FFP6RxPsJapd9NXzuwwOsl76ILaHuQbgkWLs_aM6JbvfRQyZWFjUeRYNAHwN-04woT-aXsTn-vLelVGy6dYTjUV2iqdNHYLrP3mtlr5VH9Y574CUluH93bu5w4tiifpGKol8YbnktZU5bruhqfTlq3j4XV4O3v6EPr8bnM8PGuRq7geLtDZZGojbMO7f0GvBg4I9EnVotWr9Ldrq4CRr9nKuONcJ0NpGvrctUfAdVBxnTD2sWPNVXB8kji6P9Rd1TeSFaLltU1Z",
    source: "", // No fallback video
  },
  programs: {
    beginner: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh7Wo7X_B-E9G96nr16GchG2aCBR5QdsRPd45WIU9S98vDfm05O4o19xj8B6K9J9U1OjsrtG4ojOB2PRH7PWVkSbu3ZPdRxR2AlYORhQOjWgEpTF3ZvqwgIMaC8gYkbekQjlhQihmYQNbwYKxRkgn7BQOiK84hUa_BPjxFyqdF-Df2FUPgAE5WjO8jnaMpBrm0bFvowpFaR9OE46gf6kfOmJobIuCTVZJx28pWx-I56eHIsaX-XCIzQdVzsg4LRCQoUCLEihxbg49B",
    intermediate: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdl4EiCRt-xxDd98FE6oLR6BwUFVd4Yh1ntUM9bE0OTe3GuRCmBlJgtqrYloLntwECOnR-rMHeXTVlX9y_HNNYfzyPVfx7YRgyoshj6TGScBzIvzwylLmrlsB_VuEvSYvcYkd3Dvdbg33ot8HBO8bBAlQklFGEZRFTSmTqHwK47JyRGoYd3inW-MUWGx5TOrQl773w-ENM7NYsFzNFkUtgodxsw9LR4TQKhhTGD8lkrkOFgebUKL4PuBhQM6388ALPD5lUcGCNs4F-",
    advanced: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFn1uH4FTCjxho-6fojP4a74YUxisAxkIngf-j3SLuYcBnIHXLWP_HTTMLNrZtWXZ01NCZEaHwtYwf-T6vQA6d5Equ1yUJJtENGFveYCmisB5QLVMydQYDupM9wOawV-pdNG1QZplbSeEPWcu0u-aHALdQBZJZJtdNHG7C5xg55orXUA8kO-03C9pyi6oEKkvAaFYiWE_auF5qDUHgBzbFQgYmB4YYHea4ZpeNtWea-D-7I31iyCJ79uphgHN2uY14Vwxp2_ySHMl",
  },
  carrousel: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBfKAyhfSLt1q7n5-9-CW5-wT3w8W8Iyf2Hblvb27HmKzOL1qBnL5j4FvnE3UwFSOyeQrKcfQsZApIBw9BY36i3uUWJe5xopVnXU9-h4jMw2am0D1jUyLabMPw-FagzpiyRbl5zELRxIh_V-4saVpLKueG-GH9ftOC09pmO8YOExy1L3I_LeBmmGguWMbWFkoIrGViHQrKfKP6kmCAzk5oiQXtp0h5EzAK-qJNUPkuwjbMyFEURiWGOyeUO_HIICf4uxAbL8RHOV54V",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCoWO6SfgBN2hE3uFtGtbb9mn1AYpDxcu2D_h2I3fN3okbgmrdYCMmN-UT_M3NV2yzLSJNgjL8Mtu6mUAnhdZomHoHS6HLe1y9BoxbSmfSLXqJgqyfNT95luCAA-QoQ8N7zvZl5VTE4NP4VqYaiv9q1w982YErx01x3l65hnIZtQO-QxZcDCDKcvLRr3CnnUAXgv18tN59mowvDgA4Fh_3byYRD0hngR1IxtI8ZxOTSHuj-RqO0K7nQXevvuOk_CY3VA4PXl5d5DVcA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDer5YFVqvRHaKeEl4_371kiA9TJFT9yNHsKgX1sa00nHou9QwAGPE0rKAxwilwZ74JuRq8OW41McJVXnCgsJmvljGMIP2sWNA2NUdXuvWABEbOgg9ZrAQ0rGFQMzWrWNURZZD_xhS3Y7rosWmc8C4EGbpSJIzRudE9dHbc-PI_tLUdE80OM-3VY3DraJ__UcjP_NdrUr-gtG-K-WFzNHDYeI4E42Es9YXv5r-zZb8tE4uAu_wo-fgHykN3-SWlJ-qIHd3IU1i7YJtV",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCjacHJbEJXmyMBKAVuPdnITaDVpgOgidy3RT36MhE2dBocPOOu-Ps9nhDZ_dEMXGwYt5nYp6IJ__IVtCPO11zx36aeGE1pwxFMWWMMw-XSHnw0rYz_07tM_I-6YqZKxSmdpyFLmO44itQRlMBlKOkis2J5fv_FxwuclCcHaXzt_9JI2lG-ikzhzickGUBYebQ77wOBFwKGenQA1xzPEc5q5i6rQBMiMLJQGjOPzXeTD_3sqPg2l9b3-4tcfkcjL1yO4zuZQ-2zWJAh",
    "https://picsum.photos/seed/campus1/800/600",
    "https://picsum.photos/seed/campus2/800/600",
    "https://picsum.photos/seed/campus3/800/600",
    "https://picsum.photos/seed/campus4/800/600",
    "https://picsum.photos/seed/campus5/800/600",
    "https://picsum.photos/seed/campus6/800/600"
  ],
  interviews: [
    { thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop", video: "" },
    { thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop", video: "" },
    { thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", video: "" },
  ],
  testimonials: Array.from({ length: 20 }, (_, i) => `https://api.dicebear.com/7.x/avataaars/svg?seed=Student${i}&backgroundColor=transparent`),
  form: {
    mainStudent: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    polaroid1: "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?q=80&w=400&auto=format&fit=crop",
    polaroid2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
  },
  gpa: {
    main: "https://images.unsplash.com/photo-1523050335392-938511794244?q=80&w=1000&auto=format&fit=crop",
  }
};

export const assets = USE_VERCEL_BLOB ? VERCEL_ASSETS : FALLBACK_ASSETS;
