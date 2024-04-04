import React, { useContext } from "react";
import ChatContainer from "./ChatContainer";
import MessageInput from "./MessageInput";
import { AppContext } from "../../Context";

function ChatMessage() {
  let noChatSelected = false;
  const { selected } = useContext(AppContext);
  console.log("Selected xzc ", selected);
  return (
    <div className="bg-red-200 w-full h-full flex flex-col">
      {Object.keys(selected).length === 0 ? (
        <div className="flex justify-center items-center">No Chat Selected</div>
      ) : (
        <>
          <div className="bg-gray-600 py-2 text-white">
            <p className="px-2">To: {selected.username}</p>
          </div>
          <div className="overflow-auto">
            <ChatContainer />
          </div>
          <div>
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
}

export default ChatMessage;
