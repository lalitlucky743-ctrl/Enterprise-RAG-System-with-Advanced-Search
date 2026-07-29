import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OPENROUTER_API_KEY;

console.log(
  "🔑 OpenRouter API:",
  apiKey ? "✅ Loaded" : "❌ Missing"
);


if (!apiKey) {
  throw new Error("OPENROUTER_API_KEY missing in environment variables");
}


const client = new OpenAI({
  apiKey,

  baseURL: "https://openrouter.ai/api/v1",

  timeout: 30000,      // 30 sec max wait
  maxRetries: 0,       // SDK retry off

  defaultHeaders: {
    "HTTP-Referer":
      "https://enterprise-rag-system-with-advanced.vercel.app",

    "X-Title":
      "Enterprise RAG System"
  }
});


class AISearchService {



  constructor(){

    this.models = [

  "openai/gpt-4o-mini",

  "google/gemini-2.5-flash",

  "deepseek/deepseek-chat-v3-0324"

];

  }




  async generateWithRetry(prompt){


    let lastError;



    for(const model of this.models){


      console.log(
        `🚀 Trying Model: ${model}`
      );


      for(let attempt = 1; attempt <= 2; attempt++){


        try{


          console.log(
            `🤖 Attempt ${attempt}/2`
          );



          const response = await client.chat.completions.create({
           

            model,


            messages:[

              {

                role:"system",

                content:
                `
You are an Enterprise RAG AI Assistant.

Rules:
- Give accurate answers.
- Use markdown formatting.
- Keep answers clear and professional.
- If unsure, say so.
`

              },


              {

                role:"user",

                content:prompt

              }

            ],


            temperature:0.5,


            max_tokens:1200


          });



          console.log(
            `✅ Success: ${model}`
          );


          return response;



        }

        catch(error){


          lastError = error;


          console.log(
            `❌ Failed: ${model}`
          );


          console.log(
            "Status:",
            error.status
          );


          console.error("Status:", error.status);
console.error("Name:", error.name);
console.error("Message:", error.message);
console.error("Response:", error.response?.data);
console.error(error);


         if (attempt < 2) {
  await new Promise((r) => setTimeout(r, 2000));
}

        }


      }


    }



    throw lastError;


  }






  async search(query, documents=[]){


    console.log(
      "\n======================"
    );


    console.log(
      "🔥 AI SEARCH STARTED"
    );


    console.log(
      "Question:",
      query
    );



    try{


      let context = "";



      if(documents.length){


        context = documents.map(doc=>{


          return `

TITLE:
${doc.title}


CONTENT:
${doc.content}

`;

        }).join("\n");


      }



      const prompt = `


${context ? 

`
Use the following documents:

${context}

`

:

""}



Question:

${query}


Answer clearly.


`;





      const response =
      await this.generateWithRetry(prompt);



      const answer =
      
      response.choices?.[0]
      ?.message
      ?.content;



      if(!answer){

        throw new Error(
          "Empty AI response"
        );

      }




      console.log(
        "✅ AI Response Generated"
      );



      return {


        answer,


        sources:
        documents.map(
          d=>d.title
        )


      };



    }


    catch(error){


      console.error(
        "🔥 FINAL AI ERROR"
      );


      console.error(
        error.message
      );



      return {


        answer:

`
⚠️ AI service temporarily unavailable.

Please try again.
`,


        sources:[]


      };


    }


  }





}



export default new AISearchService();