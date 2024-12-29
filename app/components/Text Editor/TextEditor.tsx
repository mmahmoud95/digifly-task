"use client";
import React, { useState, useRef } from "react";
import Toolbar from "./ToolBar";

const TextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isUnderlined, setIsUnderlined] = useState<boolean>(false);

  //history for any edits
  const [history, setHistory] = useState<string[]>([""]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // function to handle formats of text
  const handleFormat = (
    command: string,
    state: boolean,
    setState: (state: boolean) => void,
  ): void => {
    if (editorRef.current) {
      document.execCommand(command);
      setState(!state);
      saveState();
    }
  };

  // save state after any changes have in text
  const saveState = (): void => {
    if (!editorRef?.current?.textContent?.trim()) {
      setIsBold(false);
      setIsItalic(false);
      setIsUnderlined(false);
    }
    if (editorRef.current) {
      const currentContent = editorRef.current.innerHTML;
      // if state not match the current state we need to update history state
      if (history[currentIndex] !== currentContent) {
        const updatedHistory = [
          ...history.slice(0, currentIndex + 1),
          currentContent,
        ];
        setHistory(updatedHistory);
        setCurrentIndex(updatedHistory.length - 1);
      }
    }
  };

  //////////////////////////////
  const handleUndo = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      if (editorRef.current) {
        editorRef.current.innerHTML = history[currentIndex - 1];
      }
    }
  };

  //////////////////////////////////////
  const handleRedo = (): void => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (editorRef.current) {
        editorRef.current.innerHTML = history[currentIndex + 1];
      }
    }
  };

  return (
    <div className="mt-20">
      <Toolbar
        handleFormat={handleFormat}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        isBold={isBold}
        isItalic={isItalic}
        isUnderlined={isUnderlined}
        setIsUnderlined={setIsUnderlined}
        setIsBold={setIsBold}
        setIsItalic={setIsItalic}
      />
      <div
        ref={editorRef}
        contentEditable="true"
        className="rounded-sm border bg-white p-6"
        style={{
          minHeight: "200px",
          fontSize: "16px",
          border: "1px solid #cccccc83",
          fontFamily: "Arial, sans-serif",
          outline: "none",
          resize: "none",
        }}
        onInput={saveState}
      ></div>
    </div>
  );
};

export default TextEditor;
