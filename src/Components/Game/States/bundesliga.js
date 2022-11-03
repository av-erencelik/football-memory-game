import { v4 as uuidv4 } from "uuid";
import augsburg from "../../../Images/Bundesliga/augsburg.png";
import bayern from "../../../Images/Bundesliga/bayern.png";
import bochum from "../../../Images/Bundesliga/bochum.png";
import borussia from "../../../Images/Bundesliga/borussia.png";
import dortmund from "../../../Images/Bundesliga/dortmund.png";
import frankfurt from "../../../Images/Bundesliga/frankfurt.png";
import freiburg from "../../../Images/Bundesliga/freiburg.png";
import hertha from "../../../Images/Bundesliga/hertha.png";
import hoffenheim from "../../../Images/Bundesliga/hoffenheim.png";
import köln from "../../../Images/Bundesliga/köln.gif";
import leipzig from "../../../Images/Bundesliga/leipzig.png";
import leverkusen from "../../../Images/Bundesliga/leverkusen.png";
import mainz from "../../../Images/Bundesliga/mainz.png";
import schalke from "../../../Images/Bundesliga/schalke.png";
import stuttgart from "../../../Images/Bundesliga/stuttgart.png";
import unionberlin from "../../../Images/Bundesliga/unionberlin.png";
import werder from "../../../Images/Bundesliga/werder.png";
import wolfsburg from "../../../Images/Bundesliga/wolfsburg.png";

export const bundesligaState = [
  { logo: augsburg, id: uuidv4(), isSelected: false, name: "augsburg" },
  { logo: bayern, id: uuidv4(), isSelected: false, name: "bayern münchen" },
  { logo: bochum, id: uuidv4(), isSelected: false, name: "vfl bochum" },
  {
    logo: borussia,
    id: uuidv4(),
    isSelected: false,
    name: "borussia mönchengladbach",
  },
  {
    logo: dortmund,
    id: uuidv4(),
    isSelected: false,
    name: "borussia dortmund",
  },
  {
    logo: frankfurt,
    id: uuidv4(),
    isSelected: false,
    name: "eintracht frankfurt",
  },
  { logo: freiburg, id: uuidv4(), isSelected: false, name: "sc freiburg" },
  { logo: hertha, id: uuidv4(), isSelected: false, name: "hertha berlin" },
  { logo: hoffenheim, id: uuidv4(), isSelected: false, name: "hoffenheim" },
  { logo: köln, id: uuidv4(), isSelected: false, name: "fc köln" },
  { logo: leipzig, id: uuidv4(), isSelected: false, name: "rb leipzig" },
  {
    logo: leverkusen,
    id: uuidv4(),
    isSelected: false,
    name: "bayer leverkusen",
  },
  { logo: mainz, id: uuidv4(), isSelected: false, name: "mainz" },
  { logo: schalke, id: uuidv4(), isSelected: false, name: "schalke" },
  { logo: stuttgart, id: uuidv4(), isSelected: false, name: "stuttgart" },
  { logo: unionberlin, id: uuidv4(), isSelected: false, name: "union berlin" },
  { logo: werder, id: uuidv4(), isSelected: false, name: "werder bremen" },
  { logo: wolfsburg, id: uuidv4(), isSelected: false, name: "wolfsburg" },
];
