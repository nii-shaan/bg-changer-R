import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("olive");

  const colorsKV = {
    White: "white",
    Red: "red",
    Green: "green",
    Blue: "blue",
    Yellow: "yellow",
    Pink: "pink",
    Grey: "grey",
    Cyan: "cyan",
  };

  const handleChange = (e) => {
    setColor(e.target.value);
    console.log(e.target);
  };

  let btns = [];

  for (let keys in colorsKV) {
    btns.push(
      <button
        value={colorsKV[keys]}
        onClick={handleChange}
        className="border-[2px] rounded-md px-[10px] py-[5px] hover:bg-slate-100 active:bg-gray-400"
        key={keys}
      >
        {keys}
      </button>
    );
  }
  console.log(btns);

  return (
    <div
      className="w-full h-screen flex justify-center items-center "
      style={{ backgroundColor: color }}
    >
      <div className="bg-red-400 max-w-[350px] mt-[50px] rounded-md flex justify-center gap-[10px] p-[20px] flex-wrap">
        {btns.map((item) => item)}
      </div>
    </div>
  );
}
