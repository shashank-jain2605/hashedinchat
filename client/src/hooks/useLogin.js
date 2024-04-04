import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8002/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include", // Include cookies in the request
      });
      const data = await res.json();
      console.log("data", data);
      //   localStorage.setItem("token", data.token);
      //   console.log("cookie", data.token);
      if (data.username) {
        navigate("/");
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(true);
    }
  };
  return { loading, login };
}
