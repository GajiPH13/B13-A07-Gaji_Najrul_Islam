// import React, { useContext } from "react";
// import { LogContext } from "../../context/FriendsContext";
// import TextMsg from '../../assets/text.png'
// import Call from '../../assets/call.png'
// import Video from '../../assets/video.png'

// const TimeLineLog = () => {
//   const dateFormate = (date) => {
//     return new Intl.DateTimeFormat("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     }).format(date);
//   };
//   const { log } = useContext(LogContext);
//   //  const dynamicIconSrc = () => {
//   //     if (type === "call") return Call;
//   //     if (type === "text") return TextMsg;
//   //     if (type === "video") return Video;
//   //   };
//   //   console.log(dynamicIconSrc)
//   return (
//     <div className="mt-4">
//       {log.map((logs, index) => (
//         <div key={index} logs={logs}>
//           <div className="flex justify-start gap-4 mb-2 px-4 py-4 w-280 bg-white rounded-lg">
//             <div>
//               <img src={Call} alt="" />
//             </div>
//             <div>
//               <p>Call with{logs.name}</p>
//               <p>{dateFormate(new Date())}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TimeLineLog;
import React, { useContext } from "react";
import { LogContext } from "../../context/FriendsContext";

const TimeLineLog = () => {
  const { log } = useContext(LogContext);

  const dateFormate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="mt-4">
      {log.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 mb-2 px-4 py-4 bg-white rounded-lg text-[#64748B]"
        >
          {/* 🔥 DYNAMIC IMAGE */}
          <img src={item.icon} alt={item.type} className="w-6 h-6" />

          <div>
            <p>
              <span className="text-xl font-medium">{item.type}</span> with{" "}
              {item.name}
            </p>

            <p>{dateFormate(item.time)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLineLog;
