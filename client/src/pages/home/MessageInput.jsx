import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <div className="my-2 flex justify-center w-full">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write something.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="py-2 px-4 rounded-full outline-none bg-gray-100 border border-gray-300 focus:border-orange-500 flex-grow"
        />
        <button className="ml-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none">
          Send
        </button>
      </form>
    </div>
  );
}

export default MessageInput;
