import { displayData } from "./newEntryForm/createTodo";
import loadHome from "./home";

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  main.setAttribute("id", "main");

  return main;
}

function createMain2() {
  const main2 = document.createElement("div");
  main2.classList.add("main2");

  return main2;
}

function initializeWebsite() {
  loadHome();

  const homeContainer = document.getElementById("homeContainer");
  homeContainer.appendChild(createMain());

  displayData('all');

  const content = document.getElementById('content');
  content.appendChild(createMain2());
}

export default initializeWebsite;