import { useState } from "react";
import { PlGame } from "./Game/PlGame";
import { LevelChoose } from "./LevelChoose";

export function Main() {
  const [isRender, setIsRender] = useState(true);
  const [league, setLeague] = useState("");

  function handleClick(e) {
    const leagueName = e.target.alt;
    setIsRender(false);
    setLeague(leagueName);
  }
  function handleWin() {
    setLeague("");
    setIsRender(true);
  }
  return (
    <main className="main">
      <LevelChoose isRender={isRender} handleClick={handleClick} />
      {league === "pl" && <PlGame handleWin={handleWin} />}
    </main>
  );
}
