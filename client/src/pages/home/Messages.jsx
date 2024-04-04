import React, { useContext } from "react";
import Message from "./Message";
import { AppContext } from "../../Context";
import useGetMessage from "../../hooks/useGetMessage";

function Messages() {
  const { selected, setSelected } = useContext(AppContext);
  console.log("selected szxcxc", selected);
  const { messages } = useGetMessage();
  console.log("message zxc", messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message /> */}
      {messages.map((item) => (
        <Message message={item.message} />
      ))}
    </div>
  );
}

export default Messages;
