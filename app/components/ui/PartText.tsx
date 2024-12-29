import React from "react";

const PartText: React.FC<{
  headerText: string;
  content: string;
}> = ({ headerText, content }) => {
  return (
    <div className="max-w-[1050px] pt-16 md:pt-28">
      <div className="flex items-center">
        {" "}
        <div className="h-1.5 w-16 rounded bg-secondary opacity-80 shadow-sm"></div>
        <h1 className="px-4 text-2xl font-bold text-fontcolor md:text-[32px]">
          {headerText}
        </h1>
      </div>

      <p className="mt-5 text-black600 md:text-lg">{content}</p>
    </div>
  );
};

export default PartText;
