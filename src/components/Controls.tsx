import React from "react";

interface IControlProps {
  img: string;
  children?: React.ReactNode;
}

const Controls = () => {
  return (
    <div className=" flex gap-[60px] items-center">
      <div className=" flex gap-6">
        <ControlBox img={"/mic.svg"} />
        <div className=" flex  rounded-lg bg-[#E9E9E9] px-5 gap-8">
          <button className=" h-[60px]">
            <img src="/vid.svg" alt="" />
          </button>
          <button className=" h-[60px]">
            <img src="/screen share.svg" alt="" />
          </button>
        </div>
        <ControlBox img={"/menu.svg"} />
      </div>
      <button className=" bg-[#32AC97] h-[60px] px-[54px] text-white font-bold rounded-lg">
        Confirm agreement
      </button>
      <div className=" flex gap-6">
        <ControlBox img={"/people.svg"} />
        <ControlBox img={"/message.svg"} />
        <button className=" bg-[#F95A39] px-[32px] rounded-lg">
          <img src="/dial.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Controls;

const ControlBox = (control: IControlProps) => {
  return (
    <button className=" h-[60px] bg-[#E9E9E9] px-5 grid place-items-center rounded-lg">
      <img src={control.img} alt="" />
    </button>
  );
};
