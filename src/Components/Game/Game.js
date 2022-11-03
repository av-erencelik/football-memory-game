import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Game(props) {
  const [teams, setTeams] = useState(props.league);
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
    let isGameOver = false;
    let array = teams;
    array.forEach((team) => {
      if (team.id === id && team.isSelected === false) {
        team.isSelected = true;
        setScore(score + 1);
      } else if (team.id === id && team.isSelected === true) {
        if (score >= bestScore) {
          setBestScore(score);
        }
        isGameOver = true;
        setScore(0);
      }
    });
    if (
      array.filter((team) => {
        return team.isSelected === false;
      }).length === 0
    ) {
      props.handleWin();
    }
    if (isGameOver) {
      array.forEach((team) => {
        if (team.isSelected) {
          team.isSelected = false;
        }
      });
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
            {teams.map((team) => {
              return (
                <div className="logo" key={team.id}>
                  <img
                    src={team.logo}
                    alt="1"
                    id={team.id}
                    onClick={handleClickLogo}
                    key={team.id}
                  ></img>
                  <h3 className="club">{team.name}</h3>
                </div>
              );
            })}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
