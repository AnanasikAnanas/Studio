import React, { useState } from "react";
import Sphere from "../assets/img/SY (27).png";
import Lattice from "../assets/img/SY (28).png";

const Contacts = () => {
  return (
    <div className="container z-10">
      <img
        src={Sphere}
        alt=""
        className="absolute z-0 left-0 mt-[200px] h-[900px]"
        style={{
          background: "rgba(226, 32, 102, 0.30)",
          filter: "blur(125px)",
        }}
      />
      <div className="flex flex-col gap-12 ml-[337px] mt-[100px] z-20">
        <p className="p-6 border-[1px] border-[#878787] rounded-3xl text-[#878787] w-fit">
          Контакты
        </p>
        <div className="p-16 flex flex-col gap-12 border rounded-[48px] z-20">
          <div className="flex flex-col gap-1 w-fit">
            <h1 className="text-[128px] z-20">Свяжитесь с нами</h1>
            <p className="text-[32px] text-[#878787]">
              Давайте заполним небольшую форму, это поможет найти общий язык
            </p>
          </div>
          <div className="flex gap-[100px]">
            <form className="flex flex-col gap-6 text-[32px]">
              <input
                type="text"
                placeholder="Иван Иванов"
                className="border px-8 py-6 w-[588px] rounded-2xl bg-inherit"
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="border p-8 py-6 w-[588px] rounded-2xl bg-inherit"
              />
              <textarea
                placeholder="Ваш комментарий"
                className="border p-8 py-6 w-[588px] rounded-2xl bg-inherit"
              />
              <button
                type="submit"
                className="px-12 py-6 rounded-2xl w-[588px] bg-[#E22066] shadow-[0px_4px_65px_0px_#E22066] transition-all duration-300 send"
              >
                Отправить
              </button>
              <p className="text-base text-[#878787]">
                Нажимая на кнопку вы соглашаетесь с политикой конфидециальности
              </p>
            </form>
            <img src={Lattice} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
