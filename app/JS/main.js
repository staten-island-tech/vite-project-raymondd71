import "../CSS/style.css";
import { valorantAgents } from "./agent";

valorantAgents.forEach((agent) =>
  document.querySelector(".container").insertAdjacentHTML(
    "beforeend",
    `<div class= "card"> 
    <h1>${agent["name"]}<h1> 
      <h4> Class: ${agent["class"]}</h4>
      </div>`
  )
);
