import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OPENROUTER_API_KEY;

console.log(
  "🔑 OpenRouter API:",
  apiKey ? "✅ Loaded" : "❌ Missing"
);

const client = new OpenAI({
  apiKey: apiKey,
  baseURL: "https://openrouter.ai/api/v1",
});


class AISearchService {

  async generateWithRetry(prompt, retries = 3) {

    let lastError;

    const models = [
      "deepseek/deepseek-chat-v3-0324:free",
      "meta-llama/llama-3.3-70b-instruct:free"
    ];


    for (const model of models) {

      console.log(`🚀 Trying Model: ${model}`);


      for (let attempt = 1; attempt <= retries; attempt++) {

        try {

          console.log(
            `🤖 Attempt ${attempt}/${retries}`
          );


          const response =
            await client.chat.completions.create({

              model: model,

              messages: [
                {
                  role: "user",
                  content: prompt
                }
              ],

              temperature: 0.7,
              max_tokens: 1000

            });


          console.log(
            `✅ Success using ${model}`
          );


          return response;


        } catch(error) {


          lastError = error;


          console.error(
            `❌ ${model} failed`
          );

          console.error(
            error.message
          );


          if(attempt < retries){

            console.log(
              "⏳ Retrying after 2 seconds..."
            );

            await new Promise(
              resolve => setTimeout(resolve,2000)
            );

          }

        }

      }

    }


    throw lastError;

  }



  async search(query, documents = []) {


    const start = Date.now();


    console.log(
      "\n=============================="
    );

    console.log(
      "🔥 AI SEARCH STARTED"
    );

    console.log(
      "Question:",
      query
    );


    try {


      let context = "";


      if(documents.length > 0){


        console.log(
          `📄 Using ${documents.length} documents`
        );


        context = documents
          .map(doc =>

`Title:
${doc.title}

Content:
${doc.content}`

          )
          .join(
            "\n\n----------------------\n\n"
          );


      }
      else{

        console.log(
          "📄 No documents found"
        );

      }



      let prompt;



      if(context){


        prompt = `

You are an Enterprise RAG AI Assistant.

Rules:

1. Use documents as primary source.
2. If information is not available, answer from general knowledge.
3. Be accurate.
4. Give clean Markdown response.


DOCUMENTS:

${context}


QUESTION:

${query}

`;

      }
      else{


        prompt = `

You are a helpful AI assistant.

Answer this question clearly using Markdown.

Question:

${query}

`;

      }



      const response =
        await this.generateWithRetry(prompt);



      const answer =
        response.choices[0]
        .message
        .content;



      console.log(
        "✅ AI Response Received"
      );


      console.log(
        `⏱ Time: ${Date.now()-start} ms`
      );



      return {

        answer: answer,

        sources:
          documents.map(
            doc => doc.title
          )

      };



    } catch(error){


      console.error(
        "================================"
      );

      console.error(
        "❌ OpenRouter Final Error"
      );

      console.error(
        error.message
      );


      return this.getFallbackResponse(
        query,
        documents
      );


    }


  }




  getFallbackResponse(query, documents){


    console.log(
      "📝 Using fallback response"
    );


    if(!documents || documents.length===0){


      return {

        answer:

`⚠️ AI service temporarily unavailable.

Question:
${query}

Please try again later.`,

        sources: []

      };


    }



    return {

      answer:

`Showing information from documents:

${documents.map(
doc =>
`
## ${doc.title}

${doc.content}
`
).join("\n")}`,

      sources:
        documents.map(
          doc=>doc.title
        )

    };


  }


}


export default new AISearchService();