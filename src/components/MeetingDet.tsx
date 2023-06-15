import React from "react";

const MeetingDet = () => {
  return (
    <div className=" w-full flex flex-col gap-16 overflow-y-scroll h-full">
      <div className=" bg-gradient-to-r from-[#4F81FF] to-[#AEC5FF]  p-[30px] w-full flex items-center gap-[35px] rounded-[20px]">
        <img src="/smile.svg" alt="" />
        <div className=" flex flex-col gap-3 ">
          <p className=" text-4xl text-white">Hack FS 2023</p>
          <div className=" flex gap-2 cursor-pointer">
            <p className=" text-white font-medium underline">
              0xB754369b3a7C430d7E94c14f33c097C398a0caa5
            </p>
            <img src="/look-up.svg" alt="" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 ">
        <p className="text-4xl font-medium">Torem ipsum dolor sit amet</p>
        <p className=" w-[720px] leading-7 font-medium ">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
          bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer
          in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
          Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
          Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris
          sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat
          turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec
          ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin
          vitae facilisis nisi, ac posuere leo.
        </p>
      </div>
    </div>
  );
};

export default MeetingDet;
