import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selected, setSelected] = useState({});
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    // {
    //   _id: "660f178ef596e38030f7e552",
    //   senderId: "660ee352d72508ad60beb6b7",
    //   receiverId: "660dc1d26a69bef0c3c339e2",
    //   message: "hi its me new:)",
    //   createdAt: "2024-04-04T21:11:42.059Z",
    //   updatedAt: "2024-04-04T21:11:42.059Z",
    //   __v: 0,
    // },
  ]);

  return (
    <AppContext.Provider
      value={{
        selected,
        setSelected,
        message,
        setMessage,
        messages,
        setMessages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
