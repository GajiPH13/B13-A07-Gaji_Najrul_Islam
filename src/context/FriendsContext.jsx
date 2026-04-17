
import React, { createContext, useState } from "react";
import Call from "../../src/assets/call.png";
import Text from "../../src/assets/text.png";
import Video from "../../src/assets/video.png";
import { useMemo } from "react";

export const LogContext = createContext();

const FriendsContext = ({ children }) => {
  const [log, setLog] = useState([]);

  const getIcon = (type) => {
    if (type === "Call") return Call;
    if (type === "Text") return Text;
    if (type === "Video") return Video;
  };

  const handelHistoryLog = (friendLog, type) => {
    const newLog = {
      ...friendLog,
      type,
      icon: getIcon(type),
      time: new Date(),
    };

    setLog((prev) => [...prev, newLog]);
  };
  
 const sortedLogs = useMemo(() => {
    return [...log].sort((a, b) => new Date(b.time) - new Date(a.time));
  }, [log]);

  return (
    <LogContext.Provider value={{ log, handelHistoryLog, sortedLogs }}>
      {children}
    </LogContext.Provider>
  );
};

export default FriendsContext;