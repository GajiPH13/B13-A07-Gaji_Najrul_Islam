import React, { useContext } from "react";
import { LogContext } from "../../context/FriendsContext";
import Call from "../../assets/call.png";
import Text from "../../assets/text.png";
import Video from "../../assets/video.png";
const TimeLineLog = () => {
  const dateFormate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const { log } = useContext(LogContext);
  return (
    <div className="mt-4">
      {log.map((logs, index) => (
        <div key={index} logs={logs}>
          <div className="flex justify-start gap-4 px-4 py-4 w-280 bg-white rounded-lg">
            <div>
              <img src={Call} alt="" />
            </div>
            <div>
              <p>Call with{logs.name}</p>
              <p>{dateFormate(Date)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLineLog;
