import pl from "../Images/Leagues/pl.png";
import tsl from "../Images/Leagues/tsl.png";
import serieA from "../Images/Leagues/seriea.png";
import bundes from "../Images/Leagues/bundesliga.webp";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Main() {
  const [isRender, setIsRender] = useState(true);

  function handleClick() {
    setIsRender(false);
  }
  return (
    <main className="main">
      <AnimatePresence>
        {isRender && (
          <motion.div
            className="level-choose"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ x: -1500, opacity: 0 }}
          >
            <h2 className="instruction">Please, Choose A League To Play!</h2>
            <div className="level-buttons">
              <div className="level-button">
                <img
                  src={pl}
                  alt="pl"
                  className="league pl"
                  onClick={handleClick}
                ></img>
              </div>
              <div className="level-button">
                <img
                  src={tsl}
                  alt="tsl"
                  className="league tsl"
                  onClick={handleClick}
                ></img>
              </div>
              <div className="level-button">
                <img
                  src={serieA}
                  alt="serieA"
                  className="league serieA"
                  onClick={handleClick}
                ></img>
              </div>
              <div className="level-button">
                <img
                  src={bundes}
                  alt="bundes"
                  className="league bundes"
                  onClick={handleClick}
                ></img>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
