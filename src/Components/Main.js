import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PlGame } from "./Game/PlGame";
import { LevelChoose } from "./LevelChoose";

export function Main() {
  const [isRender, setIsRender] = useState(true);
  const [league, setLeague] = useState("");
  const [instruction, setInstruction] = useState(
    "Please, Choose A League To Play!"
  );

  function handleClick(e) {
    const leagueName = e.target.alt;
    setIsRender(false);
    setTimeout(() => {
      setLeague(leagueName);
    }, 1500);
  }
  function handleWin() {
    setLeague("");
    setInstruction("You Won! Please, Choose Another League To Play!");
    setTimeout(() => {
      setIsRender(true);
    }, 1500);
  }
  function handleChangeLeague() {
    setLeague("");
    setInstruction("Please, Choose A League To Play!");
    setTimeout(() => {
      setIsRender(true);
    }, 1500);
  }
  return (
    <main className="main">
      <LevelChoose
        isRender={isRender}
        handleClick={handleClick}
        instruction={instruction}
      />
      <AnimatePresence>
        {league === "pl" && (
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            exit={{
              opacity: 0,
              x: -500,
              transition: { delay: 0, duration: 1.5 },
            }}
          >
            <PlGame
              handleWin={handleWin}
              handleChangeLeague={handleChangeLeague}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
