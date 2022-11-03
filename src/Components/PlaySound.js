import menuSong from "../audio/menusong.mp3";
import Sound from "react-sound";
import { useState } from "react";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";

export function PlaySound() {
  const [willPlay, setWillPlay] = useState(false);
  function handleClick() {
    willPlay ? setWillPlay(false) : setWillPlay(true);
  }
  return (
    <>
      <Sound
        url={menuSong}
        playStatus={willPlay ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={0}
      />
      <button onClick={handleClick} className="sound">
        {willPlay ? <GiSoundOn /> : <GiSoundOff />}
      </button>
    </>
  );
}
