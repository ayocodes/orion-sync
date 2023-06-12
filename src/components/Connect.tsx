import React from "react";

const Connect = () => {
  return (
    <div className=" bg-[#F2F2F2] w-full h-full rounded-lg p-[80px] flex flex-col justify-between">
      <div>
        <p className=" font-bold text-2xl">Connect your Wallet!</p>
        <p className=" text-xl">
          Make sure that this is the wallet you want to use for HackFS 2023!
        </p>
      </div>
      <p>
        This should be an address that we can send funds to in case you win a
        prize or qualify for a stake return. This is your personal address, not
        a team address.Please ensure this is not an exchange address, or you
        risk any funds getting stuck.
      </p>
      <button className=" w-full bg-[#4F81FF] py-4 rounded-lg text-white font-bold  text-xl">
        Connect Wallet
      </button>
      <div>
        <p className=" font-bold text-xl">Enter agreed percentage!</p>
        <p>
          Make sure this has been deliberated on carefully and everyone is
          satisfied with the outcome
        </p>
      </div>
      <input type="text" className=" bg-[#E9E9E9] w-full h-[60px] pl-[30px] focus:outline-none rounded-lg" placeholder="eg. 20%" />
    </div>
  );
};

export default Connect;
