import "../CSS/style.css";
import { valorantAgents } from "./agent";

console.log(valorantAgents);
let id = 1;

function displayAgents(valorantAgents) {
  valorantAgents.forEach(
    (agent) =>
      document.querySelector(".container").insertAdjacentHTML(
        "beforeend",
        `<div class= "card" id="card-${id}"> 
        <h1>${agent["name"]}<h1> 
      
        <h3> Class: ${agent["class"]} </h3>
        <h4>Smokes: ${agent["util"][0]}</h4>
        <h4>Flash: ${agent["util"][1]}</h4>
        <h4>Heal: ${agent["util"][2]}</h4>
        <h4>Molly: ${agent["util"][3]}</h4>
        <h4>Stun: ${agent["util"][4]}</h4>
        <img  class ="image"src="${agent["imageUrl"]}" alt="">
        <img
        </div>`
      ),
    id++
  );
}
displayAgents(valorantAgents);

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector(".container").innerHTML = "";
  displayAgents(valorantAgents);
});

document.querySelector("#flash").addEventListener("click", () => {
  const agentsWithFlash = valorantAgents.filter(
    (agent) => agent.util[1] === true
  );
  document.querySelector(".container").innerHTML = "";
  displayAgents(agentsWithFlash);
});

// agent.filter((agent) => agent.Class.includes("Duelist"));
// createdSorted();
