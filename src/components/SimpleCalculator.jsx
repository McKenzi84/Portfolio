import { useState } from "react";

const MAX_DIGITS = 10;

/* =======================
   Helpers
======================= */
function formatResult(value) {
  const str = value.toString();

  if (str.length <= MAX_DIGITS) {
    return str;
  }

  if (str.includes(".")) {
    const [intPart, decPart] = str.split(".");
    const allowedDecimals = Math.max(
      MAX_DIGITS - intPart.length - 1,
      0
    );
    return `${intPart}.${decPart.slice(0, allowedDecimals)}`;
  }

  return str.slice(0, MAX_DIGITS);
}

/* =======================
   Display
======================= */
function Display({ equation, result }) {
  return (
    <div className="bg-black p-4 rounded mb-4 font-mono">
      <div className="text-right text-xs text-gray-400 mb-1">
        {equation || " "}
      </div>
      <div className="text-right text-2xl text-green-400">
        {result || "0"}
      </div>
    </div>
  );
}

/* =======================
   Button Panel
======================= */
function ButtonPanel({ onButtonClick }) {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "⌫", "C"
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onButtonClick(btn)}
          className="p-3 bg-gray-200 rounded hover:bg-gray-300 font-semibold"
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

/* =======================
   Calculator
======================= */
export default function Calculator() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setEquation("");
      setResult("");
      return;
    }

    if (value === "⌫") {
      setEquation((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "=") {
      try {
        const evaluated = Function(
          `"use strict"; return (${equation})`
        )();
        setResult(formatResult(evaluated));
      } catch {
        setResult("Error");
      }
      return;
    }

    const nextEquation = equation + value;
    const digitCount = nextEquation.replace(/[^0-9]/g, "").length;

    if (digitCount > MAX_DIGITS) {
      return;
    }

    setEquation(nextEquation);
  };

  return (
    <div className="max-w-xs p-4 bg-white rounded-xl shadow-lg">
      <Display equation={equation} result={result} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
}
