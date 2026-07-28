import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

console.log("🔑 Gemini API Key:", apiKey ? "✅ Found" : "❌ Not Found");

let ai = null;

try {
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
    });

    console.log("✅ Gemini initialized");
  }
} catch (error) {
  console.error("❌ Gemini Init Error:", error.message);
}

class AISearchService {
  async search(query, documents = []) {
    console.log("🔥 NEW GEMINI SERVICE RUNNING");
    try {
      if (!ai) {
        console.warn("⚠️ Gemini not available. Using fallback.");
        return this.getFallbackResponse(query, documents);
      }

      let context = "";

      if (documents.length > 0) {
        context = documents
          .map(
            (doc) =>
              `Title: ${doc.title}\nContent:\n${doc.content}`
          )
          .join("\n\n--------------------\n\n");

        console.log("📄 Using document context");
      } else {
        console.log("📄 No documents found");
      }

      const prompt =
        context.length > 0
          ? `
You are an AI assistant for an Enterprise RAG System.

Answer the user's question using the provided document context.

If the answer is NOT present in the documents, then answer using your own knowledge and clearly mention that you are using general knowledge.

Context:

${context}

Question:
${query}
`
          : `
You are a helpful AI assistant.

Answer this question:

${query}
`;

    const response = await ai.models.generateContent({
  model: "gemini-3.5-flash",
  contents: [
    {
      role: "user",
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ],
});

console.dir(response, { depth: null });

return {
  answer: response.text,
  sources: documents.map((d) => d.title),
};

console.log("✅ Gemini response received");
console.log(result);

      return {
        answer: result.text,
        sources: documents.map((d) => d.title),
      };
    } catch (error) {
  console.error("❌ Gemini Error:");
  console.error("Message:", error.message);
  console.error("Status:", error.status);
  console.error("Details:", error);

  return this.getFallbackResponse(query, documents);
}
  }

  getFallbackResponse(query, documents) {
    console.log("📝 Using fallback response");

    if (!documents || documents.length === 0) {
      return {
        answer: `I couldn't connect to Gemini AI right now.

Question:
${query}

Please try again later.`,
      };
    }

    return {
      answer: documents[0].content,
      sources: documents.map((d) => d.title),
    };
  }
}

export default new AISearchService();