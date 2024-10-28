import React from "react";

function Header() {
  return (
    <header className="flex container justify-between text-4xl h-[100px] items-center text-white z-20">
      <div className="max-w-[926px]">
        <h1 className="lowercase">СТУДИЯ БАРАНОВА</h1>
      </div>
      <div className="flex gap-10">
        <a href="/my-app/src/components/Main.jsx" className="hover:text-[#878787] duration-300">главная</a>
        <a href="/About.jsx" className="hover:text-[#878787] duration-300">о нас</a>
        <a href="#" className="hover:text-[#878787] duration-300">портфолио</a>
        <a href="#" className="hover:text-[#878787] duration-300">контакты</a>
      </div>
    </header>
  );
}

export default Header;
