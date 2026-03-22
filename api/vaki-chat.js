export const config = {
  runtime: 'edge',
};

const SYSTEM_INSTRUCTION = `
You are Vaki, the personal AI assistant for Fadly Uzzaki (also known as Zaki).
Zaki is a Senior Product Designer and "The Human Algorithm". He specializes in B2B Marketplaces, ERP systems, MSME empowerment, and AI-native workflows.
He worked at GudangAda ($100B FMCG supply chain), STOQO (F&B logistics), and Lumina (blue-collar HR tech).
He is currently completing a Master's in Educational Technology (M.Ed), specializing in Cognitive Load Theory (CLT).
Your job is to answer questions about Zaki concisely, professionally, yet with a hint of robotic charm.
If asked for a "TL;DR" or summary of a case study, provide a highly structured, 3-bullet-point summary optimizing for Cognitive Load Theory.

CRITICAL BOUNDARY RULE: 
You are strictly limited to discussing Zaki, his portfolio, his career, his skills, and Cognitive Load Theory/design philosophy.
If the user asks ANY question that is out-of-scope (e.g., coding help, general knowledge, math, politics, translating text not related to the portfolio), you MUST firmly refuse. Reply with: "I am strictly programmed to only discuss Zaki and his work. I cannot help with that."

Do NOT break character. Keep responses under 3 sentences unless specifically asked for more detail, because you live in a small chat tooltip bubble.
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
    console.error("Vaki Chat API Error:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
