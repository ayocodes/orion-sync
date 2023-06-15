import ActivityBar from "@/components/ActivityBar";
import MainNav from "@/components/MainNav";
import MeetingDet from "@/components/MeetingDet";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-start gap-8">
      <MainNav />
      <div className=" pt-8 pr-8 flex flex-col gap-8 w-full h-screen">
        <div className=" flex justify-end items-center w-full">
          <img
            src="/profile.png"
            alt=""
            className=" rounded-full w-[60px] h-[60px] cursor-pointer"
          />
        </div>
        <div className=" w-full flex gap-[128px] justify-between items-start overflow-y-scroll h-full ">
          <MeetingDet />
          <ActivityBar />
        </div>
      </div>
    </main>
  );
}
