import React from "react";

const Chat = () => {
  const chatMessage = [
    {
      name: "Tomi",
      message:
        "Aspernatur dignissimos saepe accusamus consectetur voluptatum officia obcaecati ex commodi ullam error.",
    },
    {
      name: "Nelson",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos saepe accusamus consectetur voluptatum officia obcaecati ex commodi ullam error.",
    },
    {
      name: "Nelson",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos saepe accusamus consectetur voluptatum officia obcaecati ex commodi ullam error.",
    },
  ];
  return (
    <div className=" flex flex-col gap-[30px] h-[calc(100vh-370px)] overflow-y-scroll">
      {chatMessage.map((chat, i) => (
        <div className=" flex gap-4" key={i}>
          <div className=" min-w-[60px] h-[60px] bg-violet-500 rounded-full" />
          <div className=" flex flex-col gap-2.5 w-full">
            <p className=" text-[#ACACAC] font-medium">{chat.name}</p>
            <div className=" p-4 w-full bg-[#E9E9E9] rounded-[20px]">
              {chat.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
