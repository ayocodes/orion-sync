"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const icon = [
  { homeA: "/Home.svg", homeN: "/HomeW.svg", location: "/" },
  { homeA: "/Video.svg", homeN: "/VideoW.svg", location: "/meeting" },
  { homeA: "/Wallet.svg", homeN: "/WalletW.svg", location: "/wallet" },
  { homeA: "/Document.svg", homeN: "/DocumentW.svg", location: "/note" },
  { homeA: "/Folder.svg", homeN: "/FolderW.svg", location: "/folder" },
  { homeA: "/Calendar.svg", homeN: "/CalendarW.svg", location: "/calender" },
  { homeA: "/Setting.svg", homeN: "/SettingW.svg", location: "/setting" },
];

const MainNav = () => {
  const pathname = usePathname();
  const pageName = pathname.split("/")[1];
  console.log(pageName);

  return (
    <div className=" flex flex-col justify-center gap-8 px-8 pb-[50px] bg-white h-screen">
      <img src="/logo.svg" className=" absolute top-4 left-7" alt="" />
      {icon.map((icon, i) => (
        <Link href={icon.location} key={i}>
          <img
            src={pathname == icon.location ? icon.homeA : icon.homeN}
            alt=""
            className="w-[43px]"
          />
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
