import React, { useContext } from 'react';
import { LogContext } from '../../context/FriendsContext';
import TimeLineLog from '../../components/timeLineLog/TimeLineLog';

const TimeLine = () => {
    const {log} = useContext(LogContext);
      console.log(log);
    return (
        <div className='px-61 py-40 bg-gray-50 '>
            <p className='text-3xl font-bold text-[#1F2937]'>Timeline</p>
            <TimeLineLog></TimeLineLog>
        </div>
    )
};

export default TimeLine;