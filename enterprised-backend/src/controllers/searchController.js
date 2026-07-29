import { documents } from './documentController.js';
import aiSearchService from '../services/aiSearchService.js';


export const search = async (req, res) => {

  try {

    console.log("================================");
    console.log("🔍 SEARCH REQUEST STARTED");
    console.log("================================");


    const { query } = req.body;
    const userId = req.user.id;


    if (!query || query.trim().length === 0) {

      return res.status(400).json({
        success:false,
        error:"Query is required"
      });

    }


    console.log("📝 Query:", query);
    console.log("👤 User ID:", userId);



    console.log(
      "📚 Total documents:",
      documents.length
    );


    // Document search
    const results = documents
      .filter(doc => doc.userId === userId)
      .filter(doc => {

        const searchTerm = query.toLowerCase();


        return (
          doc.title
            .toLowerCase()
            .includes(searchTerm)
          ||

          doc.content
            .toLowerCase()
            .includes(searchTerm)
        );

      });



    console.log(
      "📄 Matching documents:",
      results.length
    );



    console.log(
      "🤖 Starting AI generation..."
    );



    // AI timeout protection
    const aiResult = await Promise.race([


      aiSearchService.search(
        query,
        results
      ),



      new Promise((_, reject)=>{

        setTimeout(()=>{

          reject(
            new Error(
              "AI service timeout"
            )
          );

        },30000);


      })


    ]);



    console.log(
      "✅ AI response received"
    );



    res.status(200).json({

      success:true,

      query,

      answer:
        aiResult.answer ||
        "No answer generated",


      results:

        results.map(doc=>({

          id:doc.id,

          title:doc.title,

          content:
            doc.content.substring(0,200)
            +"...",


          fileType:
            doc.fileType

        })),


      total:
        results.length,


      isAI:true

    });



  }

  catch(error){


    console.error(
      "❌ SEARCH FAILED:",
      error.message
    );



    res.status(500).json({

      success:false,

      message:
        "Search service failed",

      error:
        error.message

    });


  }

};





export const suggest = async (req,res)=>{


  try{


    const { q } = req.query;

    const userId = req.user.id;



    if(!q){

      return res.json({
        suggestions:[]
      });

    }



    const suggestions = documents

      .filter(doc =>
        doc.userId === userId
      )

      .filter(doc =>
        doc.title
          .toLowerCase()
          .includes(
            q.toLowerCase()
          )
      )


      .map(doc=>doc.title)

      .slice(0,5);



    res.json({

      suggestions

    });



  }


  catch(error){


    console.error(
      "Suggestion error:",
      error.message
    );


    res.status(500).json({

      error:
        error.message

    });


  }


};