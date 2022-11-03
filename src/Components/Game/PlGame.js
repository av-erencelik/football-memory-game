import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { plState } from "./States/pl";

export function PlGame(props) {
  const [teams, setTeams] = useState(plState);
  const [score, setScore] = useState(0);
  const [isDelayed, setIsDelayed] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    let array = teams;
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setTimeout(() => {
      setIsDelayed(false);
    }, 1500);
    setTeams(array);
  }, [score]);

  function handleClickLogo(e) {
    setIsDelayed(true);
    const id = e.target.id;

    let array = teams;
    array.map((team) => {
      if (team.id === id && team.isSelected === false) {
        team.isSelected = true;
        setScore(score + 1);
      } else if (team.id === id && team.isSelected === true) {
        if (score >= bestScore) {
          setBestScore(score);
        }
        setScore(0);
      }
      return null;
    });
    if (
      array.filter((team) => {
        return team.isSelected === false;
      }).length === 0
    ) {
      props.handleWin();
    }
    setTeams(array);
  }

  return (
    <AnimatePresence>
      {!isDelayed && (
        <>
          <motion.div
            className="scores"
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            exit={{
              opacity: 0,
              x: -500,
              transition: { delay: 0, duration: 1.5 },
            }}
          >
            <button className="changeLeague" onClick={props.handleChangeLeague}>
              CHANGE LEAGUE
            </button>
            <h3 className="score">SCORE:{score}</h3>
            <h3 className="score">BEST SCORE:{bestScore}</h3>
          </motion.div>
          <motion.div
            className="pl-game game"
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            exit={{
              opacity: 0,
              x: -500,
              transition: { delay: 0, duration: 1.5 },
            }}
          >
            <div className="logo">
              <img
                src={teams[0].logo}
                alt="1"
                id={teams[0].id}
                onClick={handleClickLogo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                key={teams[0].id}
              ></img>

              <h3 className="club">{teams[0].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[1].logo}
                alt="1"
                id={teams[1].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[1].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[2].logo}
                alt="1"
                id={teams[2].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[2].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[3].logo}
                alt="1"
                id={teams[3].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[3].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[4].logo}
                alt="1"
                id={teams[4].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[4].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[5].logo}
                alt="1"
                id={teams[5].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[5].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[6].logo}
                alt="1"
                id={teams[6].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[6].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[7].logo}
                alt="1"
                id={teams[7].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[7].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[8].logo}
                alt="1"
                id={teams[8].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[8].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[9].logo}
                alt="1"
                id={teams[9].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[9].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[10].logo}
                alt="1"
                id={teams[10].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[10].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[11].logo}
                alt="1"
                id={teams[11].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[11].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[12].logo}
                alt="1"
                id={teams[12].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[12].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[13].logo}
                alt="1"
                id={teams[13].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[13].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[14].logo}
                alt="1"
                id={teams[14].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[14].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[15].logo}
                alt="1"
                id={teams[15].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[15].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[16].logo}
                alt="1"
                id={teams[16].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[16].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[17].logo}
                alt="1"
                id={teams[17].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[17].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[18].logo}
                alt="1"
                id={teams[18].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[18].name}</h3>
            </div>
            <div className="logo">
              <img
                src={teams[19].logo}
                alt="1"
                id={teams[19].id}
                onClick={handleClickLogo}
              ></img>
              <h3 className="club">{teams[19].name}</h3>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
