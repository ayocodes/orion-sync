import React from "react";

const CreateSpace = () => {
  return (
    <div className=" w-[700px] h-[700px] bg-[#181E2E] rounded-[20px] p-8 flex flex-col items-center text-white">
      {/* home */}
      {/* <div className=" flex gap-8 items-center pt-[148px]">
        <img src="/logoHome.svg" className=" w-[50px]" alt="" />
        <p className=" text-[64px] text-white font-extralight">Orion Sync </p>
      </div>
      <p className=" w-[380px] text-white text-[24px] text-center">
        Connect, collaborate and fairly distribute workspace prizes with ease
      </p> */}

      {/* Create space */}
      {/* <div className=" w-full flex flex-col gap-8 ">
        <p className=" text-[32px] text-white">Create Space</p>
        <div className=" flex flex-col gap-2">
          <p className=" text-white font-medium text-xl">Name</p>
          <div className=" flex bg-[#2A3552] rounded-[10px] p-4 gap-4">
            <img src="/emoji.svg" alt="" />
            <input type="text" className=" w-full bg-transparent outline-none text-white" />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <p className=" text-white font-medium text-xl">Description</p>
          <div className=" flex bg-[#2A3552] rounded-[10px] p-4 gap-4">
            <textarea className=" w-full bg-transparent outline-none text-white resize-none h-[90px]" />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <p className=" text-white font-medium text-xl">Participant Address</p>
          <div className=" flex bg-[#2A3552] rounded-[10px] p-4 gap-4">
            <textarea className=" w-full bg-transparent outline-none text-white resize-none h-[80px]" />
          </div>
        </div>
        <button className=" w-full bg-[#4F81FF] py-4 rounded-[10px] text-white font-medium text-lg">Create</button>
      </div> */}

      {/* Space ID */}
      {/* <div className=" pt-[148px] flex flex-col items-center gap-[24px] w-full">
        <div className=" flex flex-col items-center gap-4">
          <p className="  text-4xl">Here is your space id</p>
          <p className=" text-lg">You can invite friends to join using this</p>
        </div>
        <div className=" flex bg-[#2A3552] rounded-[10px] p-4 gap-4 w-full">
          <input
            type="text"
            className=" w-full bg-transparent outline-none text-white"
          />
          <img src="/Copy.svg" alt="" className=" cursor-pointer" />
        </div>
      </div> */}

      {/* join a space */}
      <div className=" w-full  font-medium flex flex-col gap-8">
        <p className=" text-[32px]">Join a space</p>
        <div className=" flex flex-col gap-2">
          <p className=" text-white font-medium text-xl">Description</p>
          <div className=" flex bg-[#2A3552] rounded-[10px] p-4 gap-4">
            <input type="text" className=" w-full bg-transparent outline-none text-white text-base" />
          </div>
        </div>
        <button className=" w-full bg-[#4F81FF] rounded-[10px] py-4 font-medium text-lg">Join</button>
      </div>
    </div>
  );
};

export default CreateSpace;
