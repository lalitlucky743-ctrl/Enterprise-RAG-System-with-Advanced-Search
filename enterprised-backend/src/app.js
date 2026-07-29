import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

import authRoutes from './routes/authRoutes.js';
import documentRoutes from './routes/documentRoutes.js';
import searchRoutes from './routes/searchRoutes.js';

import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();


// ===============================
// Security Middleware
// ===============================

app.use(helmet());


// ===============================
// CORS Configuration
// ===============================

const allowedOrigins = [
  "https://enterprise-rag-system-with-advanced.vercel.app",
  "http://localhost:5173"
];

const corsOptions = {
  origin: function (origin, callback) {

    // Allow requests without origin (Postman, server-to-server)
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(null, false);
  },

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "OPTIONS"
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization"
  ]
};


app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions));


// ===============================
// Performance Middleware
// ===============================

app.use(compression());


// ===============================
// Body Parser
// ===============================

app.use(express.json({
  limit: "50mb"
}));

app.use(express.urlencoded({
  extended: true,
  limit: "50mb"
}));


// ===============================
// Logger
// ===============================

app.use(morgan("dev"));



// ===============================
// Health Check
// ===============================

app.get("/health", (req, res) => {

  res.status(200).json({
    status: "healthy",
    service: "Enterprise RAG API",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "production"
  });

});



// ===============================
// API Root
// ===============================

app.get("/api", (req, res) => {

  res.json({

    success: true,

    name: "Enterprise RAG API",

    version: "1.0.0",

    endpoints: {

      auth: {
        register: "POST /api/auth/register",
        login: "POST /api/auth/login",
        profile: "GET /api/auth/profile"
      },

      documents: {
        upload: "POST /api/documents/upload",
        list: "GET /api/documents",
        get: "GET /api/documents/:id",
        delete: "DELETE /api/documents/:id"
      },

      search: {
        search: "POST /api/search",
        suggest: "GET /api/search/suggest"
      },

      health: "GET /health"

    }

  });

});



// ===============================
// Test Route
// ===============================

app.get("/api/test", (req, res)=>{

  res.json({

    success:true,

    message:"API is working!",

    timestamp:new Date().toISOString()

  });

});



// ===============================
// API Routes
// ===============================

app.use("/api/auth", authRoutes);

app.use("/api/documents", documentRoutes);

app.use("/api/search", searchRoutes);



// ===============================
// 404 Handler
// ===============================

app.use((req,res)=>{

  res.status(404).json({

    success:false,

    error:"Route not found",

    path:req.originalUrl,

    method:req.method

  });

});



// ===============================
// Global Error Handler
// ===============================

app.use(errorHandler);



export default app;