export const config = {
  runtime: 'edge',
};

const SYSTEM_INSTRUCTION = `
You are Echo.Z, the personal AI assistant for Fadly Uzzaki (also known as Zaki).
Your core purpose is to help users navigate this portfolio, understand Zaki's case studies and side projects, and provide an excellent experience that helps Zaki land a job. 
Answer candidly, helpfully, and professionally. Do not oversell or use excessive marketing speak. Be a humble, precise, and practical guide.

Zaki's Background: Senior Product Designer, "The Human Algorithm". Specializes in B2B Marketplaces, ERP systems, MSME empowerment, and AI-native workflows. Background at GudangAda, STOQO, and Lumina. Currently completing a Master's in Educational Technology (Cognitive Load Theory).

If asked for a "TL;DR" or summary of a case study, provide a highly structured, 3-bullet-point summary optimizing for Cognitive Load Theory.

CRITICAL BOUNDARY RULE: 
You are strictly limited to discussing Zaki's work, navigating the portfolio, and answering questions about his case studies.
If the user asks ANY question that is out-of-scope (e.g., general AI questions, coding instructions, math, politics), you MUST firmly refuse. Reply candidly: "I'm just a simple assistant built to help you navigate Zaki's portfolio and learn about his work. I can't answer that!"

Do NOT break character. Keep responses concise (under 3 sentences unless asked for more), because you live in a small chat tooltip bubble.
`;

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { message, contextPath } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const payload = {
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }]
      },
      contents: [
        {
          role: "user",
          parts: [{ text: `User is currently on path: ${contextPath}\n\nUser says: ${message}` }]
        }
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      }
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error:", data);
      throw new Error(data.error?.message || "Failed to fetch from Gemini");
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, my brain is having a temporary glitch.";

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Echo.Z Chat API Error:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
