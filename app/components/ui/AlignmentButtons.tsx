import React from "react";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { LuAlignJustify } from "react-icons/lu";
import {
  RiIndentIncrease,
  RiListOrdered,
  RiListUnordered,
} from "react-icons/ri";
import { FaOutdent } from "react-icons/fa";

const AlignmentButtons = () => {
  const alignmentButtons = [
    { icon: <FaOutdent size={16} /> },
    { icon: <BiMenuAltRight size={24} /> },
    { icon: <LuAlignJustify size={20} /> },
    { icon: <BiMenuAltLeft size={24} /> },
    { icon: <RiIndentIncrease size={20} /> },
    { icon: <RiListUnordered size={20} /> },
    { icon: <RiListOrdered size={20} /> },
  ];
  return (
    <div>
      {alignmentButtons.map((button, index) => (
        <button key={index}>{button.icon}</button>
      ))}
    </div>
  );
};

export default AlignmentButtons;
