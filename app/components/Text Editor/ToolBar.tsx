"use client";
import React from "react";
import { IoMdRedo, IoMdUndo } from "react-icons/io";
import { AiOutlineUnderline } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineBold } from "react-icons/ai";
import { VscTextSize } from "react-icons/vsc";
import { AiOutlineFontColors } from "react-icons/ai";
import AlignmentButtons from "../ui/AlignmentButtons";

type ToolBarProps = {
  handleUndo: () => void;
  handleRedo: () => void;
  isUnderlined: boolean;
  setIsUnderlined: (isUnderlined: boolean) => void;
  isBold: boolean;
  setIsBold: (isBold: boolean) => void;
  isItalic: boolean;
  setIsItalic: (isItalic: boolean) => void;
  handleFormat: (
    format: string,
    currentState: boolean,
    setState: (state: boolean) => void,
  ) => void;
};

const ToolBar = ({
  handleUndo,
  handleRedo,
  isUnderlined,
  setIsUnderlined,
  isBold,
  setIsBold,
  isItalic,
  setIsItalic,
  handleFormat,
}: ToolBarProps) => {
  const handleButtonClick = (e: React.MouseEvent, callback: () => void) => {
    e.preventDefault();
    callback();
  };
  return (
    <div className="toolbar flex border-l border-r border-t bg-[#f8f7fc]">
      {/* buttons for Formate & Undo , Redo */}
      <div>
        <button className="flex items-center text-xs">
          <span className="font-medium">Sans Serif </span>
          <IoMdArrowDropdown size={16} />
        </button>
        <button onMouseDown={handleUndo}>
          <IoMdUndo size={20} />
        </button>
        <button onClick={handleRedo}>
          <IoMdRedo size={20} />
        </button>
        <button>
          <VscTextSize size={20} /> <IoMdArrowDropdown size={16} />
        </button>
        <button
          className={`${isUnderlined ? "bg-primary text-white" : ""}`}
          onMouseDown={(e) =>
            handleButtonClick(e, () =>
              handleFormat("underline", isUnderlined, setIsUnderlined),
            )
          }
        >
          <AiOutlineUnderline size={20} />
        </button>{" "}
        <button
          className={`${isItalic ? "bg-primary text-white" : ""}`}
          onMouseDown={(e) =>
            handleButtonClick(e, () =>
              handleFormat("italic", isItalic, setIsItalic),
            )
          }
        >
          i
        </button>
        <button
          className={`cursor-pointer ${isBold ? "bg-primary text-white" : ""}`}
          onMouseDown={(e) =>
            handleButtonClick(e, () => handleFormat("bold", isBold, setIsBold))
          }
        >
          <AiOutlineBold size={20} />
        </button>
        <button className={`cursor-pointer`}>
          <AiOutlineFontColors size={20} />
        </button>
      </div>
      <AlignmentButtons />
    </div>
  );
};

export default ToolBar;
