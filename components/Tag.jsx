import React from "react";

export const ListContainer = ({ children }) => {
  return <div className="my-3 flex gap-3">{children}</div>;
};

export const Item = ({ text, onClick, selected }) => {
  return (
    <span
      className={`px-3 py-1.5 text-sm rounded-lg ${
        selected ? "bg-white text-black" : "bg-white/20 hover:bg-white/30"
      } cursor-pointer background-color-trans`}
      onClick={onClick}
    >
      {text}
    </span>
  );
};
