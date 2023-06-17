import React from "react";

const page = () => {
  const schedule = [
    {
      activity:
        "Discussion about percentage shares when prizes are distributed",
      date: "Tues, july 20th",
      time: "04:35 am",
    },
    {
      activity:
        "Discussion about percentage shares when prizes are distributed",
      date: "Tues, july 20th",
      time: "04:35 am",
    },
    {
      activity:
        "Discussion about percentage shares when prizes are distributed",
      date: "Tues, july 20th",
      time: "04:35 am",
    },
    {
      activity:
        "Discussion about percentage shares when prizes are distributed",
      date: "Tues, july 20th",
      time: "04:35 am",
    },
    {
      activity:
        "Discussion about percentage shares when prizes are distributed",
      date: "Tues, july 20th",
      time: "04:35 am",
    },
  ];

  return (
    <div className=" flex flex-col gap-8">
      <div className=" flex justify-between items-center pl-[30px]">
        <div className=" flex gap-[50px] ">
          <div className=" w-[140px] text-lg">Date</div>
          <div className=" text-lg">Activity</div>
        </div>
        <button className=" w-[230px] py-4 bg-[#4F81FF] rounded-[10px] text-white font-medium text-lg">
          Create
        </button>
      </div>

      <div className=" flex flex-col ">
        {schedule.map((items, i) => (
          <div className=" flex gap-[50px] pl-[30px] py-6">
            <div className=" w-[140px]">
              <p>{items.date}</p>
              <p>{items.time}</p>
            </div>
            <div className="">{items.activity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
