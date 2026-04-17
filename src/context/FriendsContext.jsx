// import React, { createContext, useState } from "react";
// import Call from "../../src/assets/call.png";
// import Text from "../../src/assets/text.png";
// import Video from "../../src/assets/video.png";

// export const LogContext = createContext();

// const FriendsContext = ({ children }) => {
//   const [log, setLog] = useState([]);

//   const handelHistoryLog = (friendLog, type) => {
//     // console.log('friendsId',friendId)
//     const dynamicIconSrc = () => {
//       if (type === "call") return <img src={Call} alt="" />;
//       if (type === "text") return <img src={Text} alt="" /> ;
//       if (type === "video") return <img src={Video} alt="" />;
//     };
//     console.log(dynamicIconSrc, type)

//     const logList = log.find(
//       (friend) => friend.friendId === friendLog.friendId,
//     );
//     setLog([...log, friendLog]);
//      console.log(logList, type);
//   };

//   const data = {
//     handelHistoryLog,
//     log,
//     setLog
//   };
//   return <LogContext.Provider value={data}>{children}</LogContext.Provider>;
// };

// export default FriendsContext;
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