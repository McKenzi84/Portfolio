import { useState } from "react";

const MAX_DIGITS = 10;

/* =======================
   Helpers
======================= */
function formatResult(value) {
  if (value === "" || value === null || Number.isNaN(value)) {
    return "Error";
  }

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
   Calculator
======================= */
export default function InputCalculator() {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {
    const a = parseFloat(valueA);
    const b = parseFloat(valueB);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setResult("Error");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        if (b === 0) {
          setResult("Error");
          return;
        }
        res = a / b;
        break;
      default:
        setResult("Error");
        return;
    }

    setResult(formatResult(res));
  };

  return (
    <div className="max-w-sm p-4 bg-white rounded-xl shadow-lg space-y-4">
      <h3 className="text-lg font-semibold text-center">
        Input Calculator
      </h3>

      {/* Inputs */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={valueA}
          onChange={(e) => setValueA(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Value A"
        />

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>

        <input
          type="number"
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Value B"
        />
      </div>

      {/* Action */}
      <button
        onClick={calculate}
        className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
      >
        Calculate
      </button>

      {/* Result */}
      <div className="bg-black p-3 rounded font-mono text-right">
        <div className="text-xs text-gray-400">
          {valueA || "0"} {operator} {valueB || "0"}
        </div>
        <div className="text-2xl text-green-400">
          {result || "0"}
        </div>
      </div>
    </div>
  );
}
