import loadCreateNew from "./newEntryForm/createNew";
import { displayData } from "./newEntryForm/createTodo";

function createHome() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.setAttribute('id', 'container2');

    container.appendChild(createSidebar());

    container.appendChild(homeContainer());
    return container;
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add("header");

    const logo = document.createElement('div');
    logo.classList.add("logo");

    logo.appendChild(getImg("image/format-list-numbered-custom.png", "Logo-Image"));
    header.appendChild(logo);
    const logoHeading = document.createElement('h1');
    logoHeading.textContent = 'Todo List';

    header.appendChild(logoHeading);

    return header;
}

function createSidebar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');

    const sideBarHeading = document.createElement('h1');
    sideBarHeading.classList.add('schedule-title');
    sideBarHeading.textContent = "Schedules";
    sideBar.appendChild(sideBarHeading);

    //Button Container
    const btnList = document.createElement('div');
    btnList.classList.add('btn-list');
    sideBar.appendChild(btnList);

    //All Task
    const allTask = document.createElement('button');
    allTask.classList.add('button');
    allTask.appendChild(getImg("image/clipboard-list-outline-custom.png", "Task Image"));
    const t1 = document.createTextNode("All Tasks");
    allTask.appendChild(t1);
    allTask.addEventListener("click", () => {
        displayData("all");

    });
    btnList.appendChild(allTask);

    const today = document.createElement('button');
    today.classList.add('button');
    today.appendChild(getImg("image/calendar-today-custom.png", "Today Image"));
    const t2 = document.createTextNode("Today");
    today.appendChild(t2);
    today.addEventListener('click', () => {

        displayData('current');

    });
    btnList.appendChild(today);

    const next7Days = document.createElement('button');
    next7Days.classList.add('button');
    next7Days.appendChild(getImg("image/calendar-week-custom.png", "Next 7 Days"));
    const t3 = document.createTextNode("Next 7 Days")
    next7Days.appendChild(t3);
    next7Days.addEventListener('click', () => {

        displayData("next7");
    });
    btnList.appendChild(next7Days);

    const projectHeading = document.createElement('h1');
    projectHeading.classList.add('project-title');
    projectHeading.textContent = 'Projects';
    sideBar.appendChild(projectHeading);

    const projectList = document.createElement('div');
    projectList.classList.add('project-list');
    projectList.textContent = 'Add Project Here';
    sideBar.appendChild(projectList);

    const noteHeading = document.createElement('h1');
    noteHeading.classList.add('notes-title');
    noteHeading.textContent = "Notes";
    sideBar.appendChild(noteHeading);

    const notesList = document.createElement('div');
    notesList.classList.add('notes-list');
    notesList.textContent = 'Add Note Here';
    sideBar.appendChild(notesList);

    const createNew = document.createElement('button');
    createNew.classList.add('button', 'plus-button');
    createNew.setAttribute('id', "createNew");
    createNew.setAttribute('title', 'New Entry Form');
    createNew.textContent = '+';
    sideBar.appendChild(createNew);
    createNew.addEventListener("click", (e) => {

        loadCreateNew();
    });
    return sideBar;
}

function homeContainer() {
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("id", 'homeContainer');

    const displayTodoItemHolder = document.createElement("div");
    displayTodoItemHolder.setAttribute("id", 'todoItemHolder');
    displayTodoItemHolder.textContent = 'Fazal is best boy';
    homeContainer.appendChild(displayTodoItemHolder);

    //reset button
    const resetBtnHolder = document.createElement("div")
    resetBtnHolder.classList.add("resetBtnHolder");
    homeContainer.appendChild(resetBtnHolder);

    const resetBtn = document.createElement("button");
    resetBtn.classList.add("resetBtn");
    resetBtn.setAttribute("id", 'resetButton');
    resetBtn.textContent = 'Reset Schedule';
    resetBtnHolder.appendChild(resetBtn);

    return homeContainer;

}

function getImg(src, alt) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    return img;
}

function loadHome() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createHome());
}

export default loadHome;