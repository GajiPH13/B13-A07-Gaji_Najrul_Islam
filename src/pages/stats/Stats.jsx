// import React, { useContext, useState } from 'react';
// import { Legend, Pie, PieChart, Tooltip } from 'recharts';
// import { LogContext } from '../../context/FriendsContext';

// const Stats = () => {
//   const { sortedLogs} = useContext(LogContext);
//   // console.log(log)
//   // const [sortLog, setSortLog] = useState("");
//    console.log(sortedLogs)
//   const data = [
//   { name: 'Call', value: sortedLogs, fill: '#0088FE' },
//   { name: 'Text', value: 300, fill: '#00C49F' },
//   { name: 'Video', value: 300, fill: '#FFBB28' },
//   // { name: 'Group D', value: 200, fill: '#FF8042' },
// ];

//   return (
//     <div className='flex justify-center items-center my-20 '>
//        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
//       <Pie
//         data={data}
//         innerRadius="80%"
//         outerRadius="100%"
//         // Corner radius is the rounded edge of each pie slice
//         cornerRadius="50%"
//         fill="#8884d8"
//         // padding angle is the gap between each pie slice
//         paddingAngle={5}
//         dataKey="value"
//         isAnimationActive={true}
//       />
//        <div className='pt-20'>
//         <Legend></Legend>
//        <Tooltip></Tooltip>
//        </div>

//     </PieChart>

//     </div>
//   );
// };

// export default Stats;

import React, { useMemo } from "react";
import { useContext } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";
import { LogContext } from "../../context/FriendsContext";

const Stats = ({ sortedLogs }) => {
  console.log(sortedLogs)
  // 🔥 convert filtered logs → pie data
   const {log} = useContext(LogContext)
  const chartData = useMemo(() => {
    if (!sortedLogs || sortedLogs.length === 0) return [];

    const grouped = sortedLogs.reduce((acc, log) => {
      const type = log.type;
      console.log("log:", log);
console.log("type:", type);
      if (!acc[type]) {
        acc[type] = { name: type, value: 0 };
      }

      acc[type].value += 1;
      return acc;
    }, {});

    return Object.values(grouped);
  }, [sortedLogs]);
  console.log(chartData);

  // const chart = chartData.map((item) => ({
  //   name: item.name,
  //   value: item.value,
  // }));

  // const data = [
  //   { name: "Call", value: chart.value, fill: "#0088FE" },
  //   { name: "Text", value: chart.length, fill: "#00C49F" },
  //   { name: "Video", value: chart.length, fill: "#FFBB28" },
  //   // { name: 'Group D', value: 200, fill: '#FF8042' },
  // ];
  const COLORS = {
    Call: "#0088FE",
    Text: "#00C49F",
    Video: "#FFBB28",
  };
  const data = chartData.map((item) => ({
  ...item,
  fill: COLORS[item.name] || "#8884d8",
}));
  // 1. Prevent rendering if no data to avoid calculation errors
//   if (!sortedLogs) {
//   return <div>Loading...</div>;
// }
  if (chartData.length === 0) return <div className="h-[550px] flex justify-center items-center">No data available</div>;
  return (
    // <div className="style={{ minHeight: '550px' }} flex justify-center items-center my-0">
    //   <div className="w-[550px] h-[550px] relative" style={{ minHeight: '550px' }}>
    //     <ResponsiveContainer width="100%" height="100%" >
    //       <PieChart>
    //         <Pie
    //           data={chartData}
    //           dataKey="value"
    //           nameKey="name"
    //           innerRadius="70%"
    //           outerRadius="100%"
    //           paddingAngle={5}

    //         >
    //           {chartData.map((entry, index) => (
    //             <Cell
    //               key={`cell-${index}`}
    //               fill={COLORS[entry.name] || "#8884d8"}
    //             />
    //           ))}
    //         </Pie>

    //         <Tooltip />
    //         <Legend />
    //       </PieChart>
    //     </ResponsiveContainer>
    //   </div>
    // </div>
    <div className="flex justify-center items-center mt-20">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={entry.fill} />
  ))}
        </Pie>
        <Legend></Legend>
        <Tooltip></Tooltip>
        {/* <RechartsDevtools /> */}
      </PieChart>
    </div>
  );
};

export default Stats;
