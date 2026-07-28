import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Temporary storage
let users = [];


const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d'
    }
  );
};


// REGISTER
export const register = async (req, res) => {
  try {
    console.log("📝 Register:", req.body);

    let { name, email, password } = req.body;


    if (!name || !email || !password) {
      return res.status(400).json({
        error: "All fields required"
      });
    }


    email = email.trim().toLowerCase();
    password = password.trim();


    const existingUser = users.find(
      user => user.email === email
    );


    if (existingUser) {
      return res.status(400).json({
        error: "Email already registered"
      });
    }


    const user = {
      id: Date.now().toString(),
      name: name.trim(),
      email,
      password,
      role: "user"
    };


    users.push(user);


    console.log("✅ User Created:", user.email);
    console.log("👥 Total Users:", users.length);


    const token = generateToken(user);


    return res.status(201).json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });


  } catch (error) {

    console.error("Register Error:", error);

    return res.status(500).json({
      error: error.message
    });
  }
};




// LOGIN
export const login = async (req, res) => {
  try {

    console.log("🔑 Login:", req.body);


    let { email, password } = req.body;


    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password required"
      });
    }


    email = email.trim().toLowerCase();
    password = password.trim();



    const user = users.find(
      user => user.email === email
    );



    if (!user) {

      return res.status(401).json({
        error: "Invalid credentials"
      });

    }



    if (user.password !== password) {

      console.log("❌ Password mismatch");

      return res.status(401).json({
        error: "Invalid credentials"
      });

    }



    const token = generateToken(user);


    console.log("✅ Login Success:", email);



    return res.json({

      success: true,

      token,

      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }

    });



  } catch(error){

    console.error("Login Error:", error);

    return res.status(500).json({
      error: error.message
    });

  }
};





// PROFILE
export const getProfile = async (req,res)=>{

  try{

    const user = users.find(
      u => u.id === req.user.id
    );


    if(!user){

      return res.status(404).json({
        error:"User not found"
      });

    }


    res.json({

      success:true,

      user:{
        id:user.id,
        name:user.name,
        email:user.email,
        role:user.role
      }

    });



  }catch(error){

    res.status(500).json({
      error:error.message
    });

  }

};