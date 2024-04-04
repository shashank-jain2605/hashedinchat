import React from "react";

function Message({ message }) {
  return (
    <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs shadow-md my-2">
      {message}
    </div>
  );
}

export default Message;
