
import { LogContext } from "../../context/FriendsContext";
import Stats from "../../pages/stats/Stats";

const TimeLineLog = ({sortedLogs}) => {
   console.log(sortedLogs)
  // const { log } = useContext(LogContext);
// Date function 
  const dateFormate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="mt-4">
      {sortedLogs.map((logs, index) => (
        <div
          key={index}
          className="flex gap-4 mb-2 px-4 py-4 bg-white rounded-lg text-[#64748B]"
        >
          
          <img src={logs.icon} alt={logs.type} className="w-6 h-6" />

          <div>
            <p>
              <span className="text-xl font-medium">{logs.type}</span> with{" "}
              {logs.name}
            </p>

            <p>{dateFormate(logs.time)}</p>
          </div>
        </div>
      ))}
      
    </div>
    
  );
};

export default TimeLineLog;
