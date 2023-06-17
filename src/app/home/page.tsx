import CreateSpace from "@/components/CreateSpace";
import SpaceControl from "@/components/SpaceControl";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col p-8 gap-8 bg-gradient-to-r from-[#ACC4FF] to-white min-h-screen">
      <div className=" flex justify-between">
        <img src="/logoHome.svg" alt="" />
        <button className=" bg-[#4F81FF] rounded-[10px] py-4 text-white w-[150px]">
          Login
        </button>
      </div>
      <div className=" flex gap-8 justify-center items-center">
        <SpaceControl />

        <CreateSpace />
      </div>
      <p className=" font-medium text-4xl text-[#04216A]">My Spaces</p>
      <div className=" bg-gradient-to-r from-[rgba(79,129,255,0.4)] to-[rgba(174,197,255,0.4)] w-full flex gap-9 p-[30px] rounded-[20px] text-white items-center">
        <img src="/smile.svg" alt="" />
        <div className=" flex flex-col gap-3">
          <p className=" text-4xl font-medium text-white">Hack FS 2023</p>
          <div className=" flex gap-2">
            <p className=" font-medium">0xB754369b3a7C430d7E94c14f33c097C398a0caa5</p>
            <img src="/look-up.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
