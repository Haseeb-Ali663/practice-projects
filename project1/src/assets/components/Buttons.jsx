import React from "react";

const Buttons = ({ label, bgColor, textColor = "white", onClick }) => {
  return (
    <button
      className='flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold'
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Buttons;
