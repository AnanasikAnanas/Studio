import React from "react";
import Framer from "./frame";
import SY from "../assets/img/SY (18).png";

const Portfolio = () => {
  return (
    <div className="h-[837px] flex container">
      <img
        src={SY}
        alt=""
        className="absolute z-10 left-0 mt-[370px] transition-all duration-300"
        style={{
          transform: "scale(1)", // Начальный размер
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(0.5) rotate(45deg)"; // Уменьшение и поворот при наведении
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)"; // Возврат к исходному состоянию
        }}
      />
      <div className="flex flex-col gap-12 ml-[337px] z-20">
        <p className="p-6 border-[1px] border-[#878787] rounded-3xl w-fit text-[#878787]">
          Портфолио
        </p>
        <Framer />
      </div>
    </div>
  );
};

export default Portfolio;
