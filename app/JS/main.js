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

document.querySelector("#smokes").addEventListener("click", () => {
  const agentsWithSmokes = valorantAgents.filter(
    (agent) => agent.util[0] === true
  );
  document.querySelector(".container").innerHTML = "";
  displayAgents(agentsWithSmokes);
});

document.querySelector("#flash").addEventListener("click", () => {
  const agentsWithFlash = valorantAgents.filter(
    (agent) => agent.util[1] === true
  );
  document.querySelector(".container").innerHTML = "";
  displayAgents(agentsWithFlash);
});

document.querySelector("#heal").addEventListener("click", () => {
  const agentsWithHeal = valorantAgents.filter(
    (agent) => agent.util[2] === true
  );
  document.querySelector(".container").innerHTML = "";
  displayAgents(agentsWithHeal);
});

document.querySelector("#molly").addEventListener("click", () => {
  const agentsWithMolly = [];
  valorantAgents.forEach((agent) => {
    if (agent.util[3] === true) {
      agentsWithMolly.push(agent);
    }
  });
  document.querySelector(".container").innerHTML = "";
  displayAgents(agentsWithMolly);
});

// creates a list with valorant agents that are filtered so that their 3rd util(molly) is true then it displays the agents with molly in the HTML

//themes
document.querySelector("#theme").addEventListener("click", function () {
  if (document.body.classList.contains("main")) {
    document.body.classList.remove("main");
    document.body.classList.add("theme1");
  } else {
    document.body.classList.remove("theme1");
    document.body.classList.add("main");
  }
  // changes card background to match the theme
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.classList.contains("theme1-card")) {
      card.classList.remove("theme1-card");
      card.classList.add("main-card");
    } else {
      card.classList.remove("main-card");
      card.classList.add("theme1-card");
    }
  });
});
