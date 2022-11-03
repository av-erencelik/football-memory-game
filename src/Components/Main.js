import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Game } from "./Game/Game";
import { tslState } from "./Game/States/tsl";
import { LevelChoose } from "./LevelChoose";
import { plState } from "./Game/States/pl";
import { serieAState } from "./Game/States/serieA";
import { bundesligaState } from "./Game/States/bundesliga";

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
            <Game
              handleWin={handleWin}
              handleChangeLeague={handleChangeLeague}
              league={plState}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {league === "tsl" && (
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
            <Game
              handleWin={handleWin}
              handleChangeLeague={handleChangeLeague}
              league={tslState}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {league === "serieA" && (
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
            <Game
              handleWin={handleWin}
              handleChangeLeague={handleChangeLeague}
              league={serieAState}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {league === "bundes" && (
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
            <Game
              handleWin={handleWin}
              handleChangeLeague={handleChangeLeague}
              league={bundesligaState}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
