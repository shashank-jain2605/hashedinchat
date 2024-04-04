import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context";

function useGetMessage() {
  const { messages, setMessages, selected } = useContext(AppContext);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await fetch(
          `http://localhost:8002/api/v1/send/${selected._id}`
        );
        const data = await res.json();
        console.log("data message", data);

        if (data.message) {
          setMessages(data);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    if (selected._id) {
      getMessage();
    }
  }, [selected?._id]);

  return { messages };
}

export default useGetMessage;
