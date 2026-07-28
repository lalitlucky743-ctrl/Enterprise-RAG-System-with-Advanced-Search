import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

console.log("🔑 Gemini API:", apiKey ? "✅ Loaded" : "❌ Missing");

let ai = null;

try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
    console.log("✅ Gemini initialized successfully");
  }
} catch (err) {
  console.error("❌ Gemini Initialization Error:", err.message);
}

class AISearchService {
  async generateWithRetry(prompt, retries = 3) {
    const models = [
      "gemini-2.5-flash",
      "gemini-2.5-flash-lite",
    ];

    let lastError;

    for (const model of models) {
      console.log(`\n🚀 Trying Model: ${model}`);

      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          console.log(`🤖 Attempt ${attempt}/${retries}`);

          const response = await ai.models.generateContent({
            model,
            contents: prompt,
          });

          console.log(`✅ Success using ${model}`);

          return response;
        } catch (error) {
          lastError = error;

          console.error(`❌ ${model} Attempt ${attempt} Failed`);
          console.error("Status:", error.status);
          console.error("Message:", error.message);

          if (error.status === 503 && attempt < retries) {
            console.log("⏳ Gemini busy. Retrying in 2 seconds...");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            continue;
          }

          break;
        }
      }
    }

    throw lastError;
  }

  async search(query, documents = []) {
    const start = Date.now();

    console.log("\n==================================");
    console.log("🔥 AI SEARCH STARTED");
    console.log("Question:", query);

    try {
      if (!ai) {
        console.log("⚠️ Gemini not initialized");
        return this.getFallbackResponse(query, documents);
      }

      let context = "";

      if (documents.length > 0) {
        console.log(`📄 Using ${documents.length} document(s)`);

        context = documents
          .map(
            (doc) => `
Title: ${doc.title}

Content:
${doc.content}
`
          )
          .join("\n----------------------------\n");
      } else {
        console.log("📄 No documents found");
      }

      const prompt =
        documents.length > 0
          ? `
You are an Enterprise AI Assistant.

Instructions:

1. Use the uploaded documents as the primary source.
2. If the answer is not present in the documents, answer using your general knowledge.
3. Clearly mention when the answer is based on general knowledge.
4. Answer in clean Markdown.
5. Be accurate and concise.

DOCUMENTS

${context}

QUESTION

${query}
`
          : `
You are a helpful AI assistant.

Answer the following question clearly using Markdown.

Question:

${query}
`;

      const response = await this.generateWithRetry(prompt);

      let answer = "";

      if (typeof response.text === "function") {
        answer = response.text();
      } else {
        answer = response.text;
      }

      console.log("✅ Gemini Response Received");

      if (response.usageMetadata) {
        console.log("📊 Usage Metadata");
        console.dir(response.usageMetadata, {
          depth: null,
        });
      }

      console.log(
        `⏱ Response Time: ${Date.now() - start} ms`
      );

      return {
        answer: answer || "No response generated.",
        sources: documents.map((doc) => doc.title),
      };
    } catch (error) {
      console.error("\n==================================");
      console.error("❌ Gemini Final Error");
      console.error("Status:", error.status);
      console.error("Message:", error.message);

      return this.getFallbackResponse(query, documents);
    }
  }

  getFallbackResponse(query, documents) {
    console.log("📝 Using fallback response");

    if (!documents || documents.length === 0) {
      return {
        answer: `
⚠️ Gemini AI is temporarily unavailable.

This usually happens because Google's servers are experiencing high demand.

Question:
${query}

Please try again in a few moments.
`,
        sources: [],
      };
    }

    return {
      answer:
        "⚠️ Gemini AI is currently unavailable.\n\nShowing information from your uploaded documents.\n\n" +
        documents
          .map(
            (doc) => `# ${doc.title}\n\n${doc.content}`
          )
          .join("\n\n----------------------------\n\n"),
      sources: documents.map((doc) => doc.title),
    };
  }
}

export default new AISearchService();