import React from "react";

const Lines = () => {
  return (
    <div className="fixed left-0 top-0 -z-20 flex h-full w-full items-center justify-around">
      <span className="animate-line1 flex h-full w-[1px] bg-secondary"></span>
      <span className="animate-line2 flex h-full w-[1px] bg-secondary"></span>
      <span className="animate-line3 flex h-full w-[1px] bg-secondary"></span>
    </div>
  );
};

export default Lines;
