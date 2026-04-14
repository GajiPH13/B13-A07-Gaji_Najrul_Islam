import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto bg-gray-50">
      <div className="text-center space-y-4 px-61 py-20">
        <h2 className="text-5xl font-bold text-[#1F2937] ">
          Friends to keep close in your life
        </h2>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          <br></br>nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white"> + Add a Friend</button>
      </div>
      {/* Bannder bottom part */}
      <div className="flex gap-3 px-61 justify-center">
        <div className=" w-65 h-34 flex flex-col justify-center items-center p-8 bg-white shadow-sm rounded-lg">
            <p>10</p>
            <p>Total Friens</p>
        </div>
        <div className=" w-65 h-34 flex flex-col justify-center items-center p-8 bg-white shadow-sm rounded-lg">
            <p>3</p>
            <p>On Track</p>
        </div>
        <div className=" w-65 h-34 flex flex-col justify-center items-center p-8 bg-white shadow-sm rounded-lg">
            <p>6</p>
            <p>Nedd Attention</p>
        </div>
        <div className=" w-65 h-34 flex flex-col justify-center items-center p-8 bg-white shadow-sm rounded-lg">
            <p>12</p>
            <p>Interaction This Month</p>
        </div>
        
      </div>
        <div className="px-61 mt-4">
            <h2 className="text-[24px] font-semibold ">Your Friends</h2>
        </div>
    </div>
  );
};

export default Banner;
