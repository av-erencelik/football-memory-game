import pl from "../Images/Leagues/pl.png";
import tsl from "../Images/Leagues/tsl.png";
import serieA from "../Images/Leagues/seriea.png";
import bundes from "../Images/Leagues/bundesliga.webp";
export function Main() {
  return (
    <main className="main">
      <div className="level-choose">
        <h2 className="instruction">Please, Choose A League To Play!</h2>
        <div className="level-buttons">
          <div className="level-button">
            <img src={pl} alt="pl" className="league pl"></img>
          </div>
          <div className="level-button">
            <img src={tsl} alt="tsl" className="league tsl"></img>
          </div>
          <div className="level-button">
            <img src={serieA} alt="serieA" className="league serieA"></img>
          </div>
          <div className="level-button">
            <img src={bundes} alt="bundes" className="league bundes"></img>
          </div>
        </div>
      </div>
    </main>
  );
}
