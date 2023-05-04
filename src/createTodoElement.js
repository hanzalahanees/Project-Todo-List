import loadDetailPopup from "./newEntryForm/createDetailsPopup";
import { format, parseISO, isSameDay } from 'date-fns';

let myList = [];

function createItem(title, description, date, priority) {
  const todoItem = {
    title: title,
    description: description,
    date: date,
    priority: priority
  }

  let allTasks = JSON.parse(localStorage.getItem('allTasks')) || [];
  allTasks.push(todoItem);
  localStorage.setItem('allTasks', JSON.stringify(allTasks));

  return todoItem;
}

const allTasks = JSON.parse(localStorage.getItem('allTasks')) || [];

// get the DOM element to display the tasks
const taskList = document.getElementById('task-list');

for (let i = 0; i < allTasks.length; i++) {
  const task = allTasks[i];

  const todoNewElement = document.createElement('div');
  todoNewElement.classList.add('todo');

  taskList.appendChild(todoNewElement);
}

export function addItemToList(title, description, date, priority) {
  const newItem = new createItem(title, description, date, priority);
  myList.push(newItem);
}

export function displayCurrentItem() {
  myList.forEach((element) => createNewElement(element));
}

export function createNewElement(newItem) {
  const todoNewElement = document.createElement('div');
  todoNewElement.classList.add('todo');
  todoNewElement.setAttribute("data-array", myList.indexOf(newItem));
  document.querySelector('#main').appendChild(todoNewElement);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  todoNewElement.appendChild(checkBox);

  const todoTitle = document.createElement('div');
  todoTitle.classList.add('todo__title');
  // todoTitle.setAttribute('id', newItem.id);
  todoTitle.textContent = newItem.title;
  todoNewElement.appendChild(todoTitle);

  const todoPriority = document.createElement('div');
  todoPriority.classList.add('priorityHere', 'todo__priority');
  todoPriority.textContent = newItem.priority;
  todoNewElement.appendChild(todoPriority);

  const todoDetail = document.createElement('div');
  todoDetail.classList.add('todo__detail');
  todoDetail.setAttribute('title', 'Click here for more Detail');
  todoDetail.textContent = 'Details';
  todoDetail.addEventListener('click', () => {

    // loadDetailPopup();
    loadDetailPopup();
  });
  todoNewElement.appendChild(todoDetail);

  const todoDate = document.createElement('div');
  todoDate.classList.add('todo__date');

  const dateValue = newItem.date;
  const dateObj = parseISO(dateValue);
  const dateFormat = format(dateObj, 'MMMM dd, yyyy');
  const t = document.createTextNode(dateFormat);
  todoDate.appendChild(t);
  todoNewElement.appendChild(todoDate);

  todoNewElement.appendChild(getImg('image/square-edit-outline-custom.png', 'square-edit-outline-custom', ' Edit '));

  const delItem = getImg('image/delete-custom.png', 'delete-custom', ' Delete ');
  delItem.addEventListener("click", removeItem);
  todoNewElement.appendChild(delItem);

}

function getImg(src, alt, title) {
  const img = document.createElement('img');
  img.classList.add("todo__icon");
  img.src = src;
  img.alt = alt;
  img.title = title;

  return img;
}

function removeItem(e) {
  const itemToRemove = myList[e.target.parentElement.dataset.array];
  let j = 0;

  //actually removes the object from list
  for (let i = 0; i < myList.length; i++) {
    if (myList[i] !== itemToRemove) {
      //removes the object from myLibrary and shifts other books down 1 index.
      myList[j] = myList[i];
      document
        .querySelector(`[data-array="${i}"]`)
        .setAttribute("data-array", j); //updates Div values so they still correspond to the index of myLibrary
      j++;
    }
  }

  //removes just the item from showing
  document.querySelector(".main").removeChild(e.target.parentElement);

  myList.pop(); //remove last element from array because it will end up repeating the last element twice
}


export default function handleSubmit() {
  // Get input values from form
  const title = (document.querySelector('#title')).value;
  const priority = document.querySelector('#priority').value;
  const date = document.querySelector('#date').value;
  const description = document.querySelector('#todo-detail').value;

  // Create new Todo object
  // const todo = new createItem(title, description, date, priority);

  addItemToList(title, description, date, priority);
  // Create new Todo element from Todo object and add it to the DOM
  createNewElement(myList[myList.length - 1]);
}
export function getItemsForCurrentDate() {
  const currentDate = new Date();
  const itemsForCurrentDate = [];

  for (const item of myList) {
    const itemDate = parseISO(item.date);
    if (isSameDay(itemDate, currentDate)) {
      itemsForCurrentDate.push(item);
    }
  }

  return itemsForCurrentDate;
}
