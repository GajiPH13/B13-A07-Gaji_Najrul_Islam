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

const Stats = () => {
  // console.log(sortedLogs)

  const { sortedLogs } = useContext(LogContext);
  console.log(sortedLogs);
  const chartData = useMemo(() => {
    if (!sortedLogs || sortedLogs.length === 0) return [];

    const grouped = sortedLogs.reduce((acc, log) => {
      const type = log.type;
      // console.log("log:", log);
      console.log("type:", type);
      if (!acc[type]) {
        acc[type] = { name: type, value: 0 };
      }

      acc[type].value += 1;
      return acc;
    }, {});

    return Object.values(grouped);
  }, [sortedLogs]);
  // console.log(chartData);

  const COLORS = {
    Call: "#244D3F",
    Text: "#7E35E1",
    Video: "#37A163",
  };
  const data = chartData.map((item) => ({
    ...item,
    fill: COLORS[item.name] || "#8884d8",
  }));
  
  if (chartData.length === 0)
    return (
      <div className="h-[550px] flex justify-center items-center">
        No data available
      </div>
    );
  return (
    <div className="px-4 sm:px-10 lg:px-20 xl:px-61 py-10 sm:py-16 lg:py-20 bg-gray-100">
      <p className="font-bold text-2xl sm:text-3xl text-[#1F2937] py-6 sm:py-10">
        Friendship Analytics
      </p>

      <div className="bg-white rounded-lg">
        <p className="ml-5 pt-5">By Interaction Type</p>

        <div className="flex justify-center items-center bg-white py-10 sm:py-15">
         
          <div className="w-full max-w-[400px] aspect-square">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  cornerRadius="50%"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  wrapperStyle={{ marginTop: 20 }}
                  verticalAlign="bottom"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
