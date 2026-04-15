import React, { createContext, useState } from 'react';

export const LogContext = createContext();

const FriendsContext = ({children}) => {

    const [log, setLog] = useState([]);

  const handelHistoryLog = (friendLog, type) => {
    // console.log('friendsId',friendId)
    const logList = log.find(
      (friend) => friend.friendId === friendLog.friendId,
    );
    setLog([...log, friendLog]);
    console.log(logList, type);
  };
    const data = {
        handelHistoryLog,
        log,
        setLog
    }
    return <LogContext.Provider value={data}>{children}</LogContext.Provider>
};

export default FriendsContext;