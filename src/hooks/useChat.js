import { useState, useEffect, useRef } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export const useChat = (token) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Load chat history
  useEffect(() => {
    const saved = localStorage.getItem("chatHistory");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse chat history:", err);
      }
    }
  }, []);

  // Save chat history
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingMessage]);

  const sendMessage = async (query) => {
    if (!query.trim() || !token) return;

    const userMessage = {
      role: "user",
      content: query,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setStreamingMessage("");

    try {
        console.log("Final URL:", `${API_URL}/api/search`);
      const response = await fetch(`${API_URL}/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error(`Server Error (${response.status})`);
      }

      const data = await response.json();

      if (data.success && data.answer) {
        // Typing animation
        const words = data.answer.split(" ");
        let current = "";

        for (let i = 0; i < words.length; i++) {
          current += (i === 0 ? "" : " ") + words[i];
          setStreamingMessage(current);

          await new Promise((resolve) => setTimeout(resolve, 25));
        }

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.answer,
            timestamp: new Date().toISOString(),
            sources: data.results || [],
          },
        ]);

        setStreamingMessage("");
      } else {
        throw new Error(data.error || "No response received");
      }
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ ${err.message}`,
          timestamp: new Date().toISOString(),
          isError: true,
        },
      ]);

      setStreamingMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem("chatHistory");
  };

  return {
    messages,
    isLoading,
    streamingMessage,
    sendMessage,
    clearHistory,
    messagesEndRef,
  };
};