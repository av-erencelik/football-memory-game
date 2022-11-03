import pl from "../Images/Leagues/pl.png";
import tsl from "../Images/Leagues/tsl.png";
import serieA from "../Images/Leagues/seriea.png";
import bundes from "../Images/Leagues/bundesliga.webp";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LevelChoose } from "./LevelChoose";

export function Main() {
  const [isRender, setIsRender] = useState(true);

  function handleClick() {
    setIsRender(false);
  }
  return (
    <main className="main">
      <LevelChoose isRender={isRender} handleClick={handleClick} />
    </main>
  );
}
