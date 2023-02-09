import React from "react";

const Bubble = ({ left, text, right, onClick, selected }) => {
  return (
    <div
      className={`px-3 py-2 flex items-center space-x-5 rounded-lg hover:bg-white/20 cursor-pointer ${
        selected ? "selected-text" : "unselected-text"
      }`}
      onClick={onClick}
    >
      {left}
      <span className="flex-1 min-w-0 text-sm truncate">{text}</span>
      {right}
    </div>
  );
};

export default Bubble;
