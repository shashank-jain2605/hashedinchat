import React from "react";
import Conversation from "./Conversation";
import { useState, useEffect } from "react";

function SideBar() {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:8002/api/v1/users", {
          credentials: "include",
        });
        const data = await res.json();
        setConversations(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-200 w-full">
      {conversations
        ? conversations.map((item) => (
            <Conversation key={item._id} conversation={item} />
          ))
        : "fetching conversations"}
    </div>
  );
}

export default SideBar;
