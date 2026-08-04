import { useState, useEffect, useRef } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export const useChat = (token) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const messagesEndRef = useRef(null);

  // ==============================
  // LOAD CHAT HISTORY
  // ==============================
  useEffect(() => {
    try {
      const saved = localStorage.getItem("chatHistory");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load chat history:", error);
    }
  }, []);

  // ==============================
  // SAVE CHAT HISTORY
  // ==============================
  useEffect(() => {
    try {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    } catch (error) {
      console.error("Failed to save chat history:", error);
    }
  }, [messages]);

  // ==============================
  // AUTO SCROLL
  // ==============================
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, streamingMessage]);

  // ==============================
  // SEND MESSAGE
  // ==============================
  const sendMessage = async (query) => {
    const cleanQuery = query?.trim();

    if (!cleanQuery) {
      return;
    }

    if (!token) {
      console.error("❌ No authentication token found");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Please login again.",
          timestamp: new Date().toISOString(),
          isError: true,
        },
      ]);

      return;
    }

    if (!API_URL) {
      console.error("❌ VITE_API_URL is missing");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Backend URL is missing.",
          timestamp: new Date().toISOString(),
          isError: true,
        },
      ]);

      return;
    }

    // ==============================
    // USER MESSAGE
    // ==============================
    const userMessage = {
      role: "user",
      content: cleanQuery,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);
    setStreamingMessage("");

    try {
      // Remove trailing slash if present
      const baseURL = API_URL.replace(/\/+$/, "");

      // IMPORTANT:
      // .env already contains /api
      // Therefore we only add /search here.
      const searchURL = `${baseURL}/search`;

      console.log("🚀 Backend URL:", baseURL);
      console.log("🔗 Search URL:", searchURL);
      console.log("🔐 Token available:", Boolean(token));

      // ==============================
      // API REQUEST
      // ==============================
      const response = await fetch(searchURL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          query: cleanQuery,
        }),
      });

      console.log("📡 Response Status:", response.status);

      // ==============================
      // READ RESPONSE
      // ==============================
      let data = {};

      try {
        data = await response.json();
      } catch (error) {
        console.error("❌ Could not parse server response:", error);
      }

      console.log("📦 Server Response:", data);

      // ==============================
      // 401
      // ==============================
      if (response.status === 401) {
        throw new Error(
          "Authentication failed. Please logout and login again."
        );
      }

      // ==============================
      // 403
      // ==============================
      if (response.status === 403) {
        throw new Error("You are not authorized to use this service.");
      }

      // ==============================
      // 404
      // ==============================
      if (response.status === 404) {
        throw new Error(
          "Search API not found. Please check the backend URL."
        );
      }

      // ==============================
      // OTHER SERVER ERRORS
      // ==============================
      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            `Server Error (${response.status})`
        );
      }

      // ==============================
      // CHECK AI ANSWER
      // ==============================
      if (!data || !data.answer) {
        throw new Error(
          data?.error ||
            data?.message ||
            "No answer received from AI."
        );
      }

      // ==============================
      // TYPING ANIMATION
      // ==============================
      const answer = data.answer;

      const words = answer.split(" ");

      let currentText = "";

      for (let i = 0; i < words.length; i++) {
        currentText +=
          i === 0 ? words[i] : " " + words[i];

        setStreamingMessage(currentText);

        await new Promise((resolve) => {
          setTimeout(resolve, 20);
        });
      }

      // ==============================
      // ADD AI MESSAGE
      // ==============================
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: answer,
          timestamp: new Date().toISOString(),

          // Your backend may return results
          sources: Array.isArray(data.results)
            ? data.results
            : [],
        },
      ]);

      setStreamingMessage("");
    } catch (error) {
      console.error("❌ Chat Error:", error);

      setStreamingMessage("");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ ${error.message || "Something went wrong."}`,
          timestamp: new Date().toISOString(),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // ==============================
  // CLEAR CHAT
  // ==============================
  const clearHistory = () => {
    setMessages([]);
    setStreamingMessage("");

    try {
      localStorage.removeItem("chatHistory");
    } catch (error) {
      console.error("Failed to clear chat history:", error);
    }
  };

  // ==============================
  // RETURN
  // ==============================
  return {
    messages,
    isLoading,
    streamingMessage,
    sendMessage,
    clearHistory,
    messagesEndRef,
  };
};