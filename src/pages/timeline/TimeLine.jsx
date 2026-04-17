import React, { useContext, useState } from "react";
import { LogContext } from "../../context/FriendsContext";
import TimeLineLog from "../../components/timeLineLog/TimeLineLog";
import Stats from "../stats/Stats";

const TimeLine = () => {

  const {log} = useContext(LogContext);
  //  console.log(handelHistoryLog);
  const [sortLog, setSortLog] = useState("");

  const sortedLogs = sortLog
    ? log.filter((logs) => logs.type === sortLog)
    : log;
  // return 0; // No sorting
  console.log(sortedLogs)
  return (
    <div className="sm:px-6 md:px-61 md:py-40 bg-gray-50 ">
      <p className="text-3xl font-bold text-[#1F2937]">Timeline</p>
      <div className="flex justify-right my-4">
        <div className="dropdown dropdown-right dropdown-center ">
          <div tabIndex={0} role="button" className="mt-15 btn md:m-1">
            Sort By:{sortLog || ""} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 
            w-30  text-[12px] text-center shadow-sm"
          >
            <li onClick={() => setSortLog("Call")}>
              <a>Call</a>
            </li>
            <li onClick={() => setSortLog("Text")}>
              <a>Text</a>
            </li>
            <li onClick={() => setSortLog("Video")}>
              <a>Video</a>
            </li>
            <li onClick={() => setSortLog('')}>
              <a>All</a>
            </li>
          </ul>
        </div>
      </div>

      <TimeLineLog sortedLogs={sortedLogs}></TimeLineLog>
      {/* <Stats sortedLogs={sortedLogs}></Stats> */}
    </div>
  );
};

export default TimeLine;
