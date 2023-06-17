import Link from "next/link";
import React from "react";

const SpaceControl = () => {
  return (
    <div className=" bg-[rgba(255,255,255,0.3)] flex flex-col gap-4 p-4 w-[300px] rounded-[20px]">
      <div className=" flex gap-2 items-center">
        <img src="/Discovery.svg" alt="" />
        <p className="text-[#04216A]">Let’s get started</p>
      </div>
      <button className=" bg-[#4F81FF] py-4 w-full rounded-[10px] text-white text-lg font-medium">
        Create Space
      </button>
      <button className=" bg-[#4F81FF] py-4 w-full rounded-[10px] text-white text-lg font-medium">
        Join a Space
      </button>
      <p className=" text-[#04216A]">
        View previously joined space{" "}
        <Link href={"/"} className=" underline">
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default SpaceControl;
