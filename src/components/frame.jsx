import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import portfolioImage from "../assets/img/портфолио.png";
import portfolioCard from "../assets/img/Frame 32.png";
import waterImage from "../assets/img/вотер.png";
import urunsImage from "../assets/img/uruns.png";
import dotcomImage from "../assets/img/дотком.png";
import Close from "./Icons/Close";
import imgSecondCard from '../assets/img/Frame 33.png'
import imgThirdCard from '..//assets/img/Frame 34.png'
import imgFourthCard from '../assets/img/Frame 35.png'


const Framer = () => {
  const [selectedId, setSelectedId] = useState("");
  const items = [
    {
      id: "1",
      commentFirst:
        "Твой UX/UI дизайн на высшем уровне. Элегантная навигация и внимание к деталям создают удивительный пользовательский опыт.",
      commentSecond:
        "Ты создаешь настоящее искусство, каждая деталь продумана с любовью. Очень впечатлен, продолжай в том же духе!",
      img: portfolioImage,
      imgCard: portfolioCard,
    },
    {
      id: "2",
      commentFirst:
        "Твой UX/UI дизайн на высшем уровне. Элегантная навигация и внимание к деталям создают удивительный пользовательский опыт.",
      commentSecond:
        "Ты создаешь настоящее искусство, каждая деталь продумана с любовью. Очень впечатлен, продолжай в том же духе!",
      img: waterImage,
      imgCard: imgSecondCard,
    },
    {
      id: "3",
      commentFirst:
        "Твой UX/UI дизайн на высшем уровне. Элегантная навигация и внимание к деталям создают удивительный пользовательский опыт.",
      commentSecond:
        "Ты создаешь настоящее искусство, каждая деталь продумана с любовью. Очень впечатлен, продолжай в том же духе!",
      img: dotcomImage,
      imgCard: imgThirdCard,
    },
    {
      id: "4",
      commentFirst:
        "Твой UX/UI дизайн на высшем уровне. Элегантная навигация и внимание к деталям создают удивительный пользовательский опыт.",
      commentSecond:
        "Ты создаешь настоящее искусство, каждая деталь продумана с любовью. Очень впечатлен, продолжай в том же духе!",
      img: urunsImage,
      imgCard: imgFourthCard,
    },
  ];

  return (
    <motion.div className="w-[1326px] z-20">
      <div className="grid grid-cols-2 gap-5 h-fit">
        {items.map((item) => (
          <motion.div
            className={`card cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
              selectedId === item.id ? "card-selected" : ""
            }`}
            layoutId={`card-container-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
            transition={{ duration: 0.3 }}
          >
            <div className="card-content">
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-fit h-fit object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map(
              (item) =>
                item.id === selectedId && (
                  <motion.div
                    className="w-[1346px] h-[787px] overflow-y-scroll rounded-[48px] bg-[#101010] border"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className="relative flex flex-col gap-12">
                      <motion.button
                        className="absolute top-2 right-2 py-1 px-2"
                        onClick={() => setSelectedId("")}
                      >
                        <Close/>
                      </motion.button>
                      <motion.img
                        src={item.imgCard}
                        alt={item.title}
                        className="overflow-y-scroll object-cover"
                      />
                      <motion.div className="px-16 flex flex-col gap-12">
                        <h4 className="text-[32px]">Комментарии</h4>
                        <motion.div className="flex gap-16">
                          <motion.div className="p-12 border w-fit rounded-[48px] flex flex-col gap-6">
                            <motion.p
                              className="text-[32px] pb-12 border-b"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              {item.commentFirst}
                            </motion.p>
                            <p className="text-[32px]">ochil</p>
                          </motion.div>
                          <motion.div className="p-12 border w-fit rounded-[48px] flex flex-col gap-6">
                            <motion.p
                              className="text-[32px] pb-12 border-b"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              {item.commentSecond}
                            </motion.p>
                            <p className="text-[32px]">okind</p>
                          </motion.div>
                        </motion.div>
                        <div className="flex justify-center pb-12">
                          <motion.button className="px-12 py-6 border text-[32px] rounded-3xl w-fit">
                            Подробнее
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Framer;
