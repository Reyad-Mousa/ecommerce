import React from "react";

const SkeletonProductInfo = () => {
  return (
    <div className="  mt-5 sm:mt-0 md:mt-0 gap-2 flex flex-col   ">
      <h2 className="h-[20px] w-[300px]  bg-slate-300 animate-pulse"></h2>
      <h2 className="h-[20px] w-[100px]  bg-slate-300 animate-pulse "></h2>
      <p className="h-[20px] w-[300px]  bg-slate-300 animate-pulse"></p>
      <h2 className="h-[20px] w-[200px]  bg-slate-300 animate-pulse "></h2>
      <h2 className="h-[20px] w-[100px]  bg-slate-300 animate-pulse "></h2>
      <button className="h-[20px] w-[200px]  bg-slate-300 animate-pulse "></button>
    </div>
  );
};

export default SkeletonProductInfo;
