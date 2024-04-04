import React, { useContext } from "react";
import { AppContext } from "../Context";

function useSendMessage() {
  const { messages, setMessages, selected } = useContext(AppContext);
  console.log("messages inital dasdsa", messages);

  const sendMessage = async (message) => {
    try {
      const res = await fetch(
        `http://localhost:8002/api/v1/send/${selected._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
          credentials: "include", // Include cookies in the request
        }
      );
      const data = await res.json();
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log("data message", data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return { sendMessage };
}

export default useSendMessage;
