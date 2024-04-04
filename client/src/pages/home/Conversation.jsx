import React, { useContext, useState } from "react";
import { AppContext } from "../../Context";

function Conversation({ conversation }) {
  console.log(conversation);
  const { selected, setSelected } = useContext(AppContext);
  const handleSelected = (e) => {
    setSelected(conversation);
  };
  return (
    <div
      className="bg-white px-2 py-2 my-2 mx-2 hover:shadow-md cursor-pointer rounded-lg"
      onClick={handleSelected}
    >
      {conversation?.username}
    </div>
  );
}

export default Conversation;
