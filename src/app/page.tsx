import ActivityBar from "@/components/ActivityBar";
import MainNav from "@/components/MainNav";
import MeetingDet from "@/components/MeetingDet";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full flex gap-[128px] justify-between items-start overflow-y-scroll h-full ">
      <MeetingDet />
      <ActivityBar />
    </div>
  );
}
