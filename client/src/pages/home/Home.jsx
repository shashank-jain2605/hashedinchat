import React, { useEffect } from "react";
import SideBar from "./SideBar";
import ChatMessage from "./ChatMessage";

function Home() {
  return (
    <div className="flex justify-center w-[700px] mx-auto gap-2 my-5 h-[500px] bg-yellow-100">
      <SideBar />
      <ChatMessage />
    </div>
  );
}

export default Home;
