import { format, parseISO } from 'date-fns';

//To get Next 7 Days Date
const today = new Date();
const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
const isoNextWeek = nextWeek.toISOString().split('T')[0];

let data = JSON.parse(localStorage.getItem("data")) || [
  { title: "Sample1", detail: "Sample Detail 1", date: "2023-04-26", priority: "Medium" },
  { title: "Sample2", detail: "Sample Detail 2", date: new Date().toISOString().split('T')[0], priority: "High" },
  { title: "Sample3", detail: "Sample Detail 3", date: isoNextWeek, priority: "Low" },
  { title: "Sample4", detail: "Sample Detail 4", date: new Date().toISOString().split('T')[0], priority: "Low" },
  { title: "Sample5", detail: "Sample Detail 5", date: new Date().toISOString().split('T')[0], priority: "High" },
  { title: "Sample6", detail: "Sample Detail 6", date: isoNextWeek, priority: "High" },
  { title: "Sample7", detail: "Sample Detail 7", date: new Date().toISOString().split('T')[0], priority: "Medium" }
];

function createTodo() {
  const createTodo = document.createElement('div');
  createTodo.classList.add('create-todo');
  createTodo.setAttribute('id', 'todo');

  const todoForm = document.createElement('form');
  todoForm.setAttribute('id', 'create-todo-form');
  // form.setAttribute('action','');
  // form.setAttribute('method','');
  createTodo.appendChild(todoForm);

  //Title Input 
  const todoInputHolder = document.createElement('div');
  todoInputHolder.classList.add('input');
  todoForm.appendChild(todoInputHolder);

  const todoTitleLabel = document.createElement("label");
  todoTitleLabel.setAttribute('for', 'title');
  todoTitleLabel.textContent = "Title: ";
  todoInputHolder.appendChild(todoTitleLabel);

  const todoInputTitle = document.createElement('input');
  todoInputTitle.setAttribute('type', 'text');
  todoInputTitle.setAttribute('id', 'title');
  todoInputTitle.setAttribute('name', 'title');
  todoInputTitle.setAttribute('placeholder', 'Title: Pay Bills etc');
  todoInputTitle.setAttribute('maxlength', '30');
  todoInputTitle.setAttribute('required', '');
  todoInputHolder.appendChild(todoInputTitle);

  //Detail Textarea

  const todoTextareaHolder = document.createElement('div');
  todoTextareaHolder.classList.add("textarea");
  todoForm.appendChild(todoTextareaHolder);

  const todoDetailLabel = document.createElement("label");
  todoDetailLabel.setAttribute('for', 'todo-detail');
  todoDetailLabel.textContent = "Details: ";
  todoTextareaHolder.appendChild(todoDetailLabel);

  const todoTextareaDetail = document.createElement('textarea');
  todoTextareaDetail.setAttribute('name', 'Details');
  todoTextareaDetail.setAttribute('id', 'todo-detail');
  todoTextareaDetail.setAttribute('name', 'todo-detail');
  todoTextareaDetail.setAttribute('cols', '30');
  todoTextareaDetail.setAttribute('rows', '16');
  todoTextareaDetail.setAttribute('required', '');
  todoTextareaHolder.appendChild(todoTextareaDetail);

  //Date

  const todoDateHolder = document.createElement('div');
  todoDateHolder.classList.add('date');
  todoForm.appendChild(todoDateHolder);

  const todoDateLabel = document.createElement("label");
  todoDateLabel.setAttribute('for', 'date');
  todoDateLabel.textContent = "Due Date: ";
  todoDateHolder.appendChild(todoDateLabel);

  const todoDateInput = document.createElement('input');
  todoDateInput.setAttribute('type', 'date');
  todoDateInput.setAttribute('name', 'date');
  todoDateInput.setAttribute('id', 'date');
  todoDateInput.setAttribute('required', '');
  todoDateHolder.appendChild(todoDateInput);

  //priority
  const priorityHolder = document.createElement('div');
  priorityHolder.classList.add('priority');
  todoForm.appendChild(priorityHolder);

  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'priority');
  priorityLabel.textContent = "Priority: ";
  priorityHolder.appendChild(priorityLabel);

  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('name', 'priority');
  prioritySelect.setAttribute('id', 'priority');
  prioritySelect.setAttribute('name', 'priority');
  prioritySelect.setAttribute('required', '');
  priorityHolder.appendChild(prioritySelect);

  const option1 = document.createElement('option')
  option1.setAttribute('value', '');
  option1.textContent = "";
  prioritySelect.appendChild(option1);

  const option2 = document.createElement('option')
  option2.setAttribute('value', 'High');
  option2.textContent = "High";
  prioritySelect.appendChild(option2);

  const option3 = document.createElement('option')
  option3.setAttribute('value', 'Medium');
  option3.textContent = "Medium";
  prioritySelect.appendChild(option3);

  const option4 = document.createElement('option')
  option4.setAttribute('value', 'Low');
  option4.textContent = "Low";
  prioritySelect.appendChild(option4);

  //todo submit Button
  const todoSubmitBtn = document.createElement('button');
  todoSubmitBtn.classList.add('btn-create-new', 'btn-add-todo');
  todoSubmitBtn.setAttribute('type', 'submit');
  todoSubmitBtn.setAttribute('id', 'add-todo');
  todoSubmitBtn.textContent = 'Add Todo';
  todoForm.appendChild(todoSubmitBtn);

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(todoForm);
    const title = formData.get("title");
    const detail = formData.get("todo-detail");
    const date = formData.get("date");
    const priority = formData.get("priority");

    // Create a new object from the form data
    const newData = { title, detail, date, priority };

    // Add the new object to the data array
    data.push(newData);

    // Save the updated data array to local storage
    localStorage.setItem("data", JSON.stringify(data));

    // todoForm.reset();

    displayData();
    document.getElementById('overlay').style.visibility = 'hidden';
  });

  return createTodo;
}

export function displayData(dateRange) {

  const todoItemContainer = document.getElementById('todoItemHolder');
  // Clear the existing output
  todoItemContainer.innerHTML = "";

  const detailContainer = document.getElementById('overlayDetail');

  console.log(detailContainer);

  // Define variables for the different date ranges
  const currentDate = new Date();
  const nextWeekDate = new Date();
  nextWeekDate.setDate(nextWeekDate.getDate() + 7);

  // Loop through the data array and create HTML elements for each object
  data.forEach((obj, index) => {

    // Check if we should display this item based on the date range parameter
    const itemDate = new Date(obj.date);
    if (dateRange === "current" && itemDate.toDateString() !== currentDate.toDateString()) {
      return;
    }
    else if (dateRange === "next7" && (itemDate < currentDate || itemDate > nextWeekDate)) {
      return;
    }

    const todoNewElement = document.createElement('div');
    todoNewElement.classList.add('todo');
    todoItemContainer.appendChild(todoNewElement);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    todoNewElement.appendChild(checkBox);

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todo__title');
    todoTitle.textContent = obj.title;
    todoNewElement.appendChild(todoTitle);

    const todoPriority = document.createElement('div');
    todoPriority.classList.add('priorityHere', 'todo__priority');
    todoPriority.textContent = obj.priority;
    todoNewElement.appendChild(todoPriority);

    const todoDetail = document.createElement('div');
    todoDetail.classList.add('todo__detail');
    todoDetail.setAttribute('title', 'Click here for more Detail');
    todoDetail.setAttribute('id', `button-${index}`) //care for backtick
    todoDetail.textContent = 'Details';

    todoDetail.addEventListener('click', () => {

      const itemData = data[index];

      // loadDetailPopup();
      const detailPopup = document.createElement('div');
      detailPopup.classList.add("Details-popup");

      //Title
      const detailsPopupTitle = document.createElement('div');
      detailsPopupTitle.classList.add("details-popup-title");
      // detailsPopupTitle.textContent=`Fazal`;
      detailsPopupTitle.textContent = `${itemData.title}`;
      detailPopup.appendChild(detailsPopupTitle);

      //project
      const detailsPopupProject = document.createElement('div');
      detailsPopupProject.classList.add("details-popup-project");
      detailPopup.appendChild(detailsPopupProject);

      const popupProjectHeading = document.createElement('h3');
      popupProjectHeading.textContent = 'Project: ';
      detailsPopupProject.appendChild(popupProjectHeading);

      const popupProjectContent = document.createElement('span');
      popupProjectContent.classList.add('span');
      popupProjectContent.textContent = 'Home';
      detailsPopupProject.appendChild(popupProjectContent);

      //priority
      const detailsPopupPriority = document.createElement('div');
      detailsPopupPriority.classList.add("details-popup-priority");
      detailPopup.appendChild(detailsPopupPriority);

      const popupPriorityHeading = document.createElement('h3');
      popupPriorityHeading.textContent = 'Priority: ';
      detailsPopupPriority.appendChild(popupPriorityHeading);

      const popupPriorityContent = document.createElement('span');
      popupPriorityContent.classList.add('span');

      popupPriorityContent.textContent = `${itemData.priority}`;
      detailsPopupPriority.appendChild(popupPriorityContent);

      //Due Date

      const detailsPopupDate = document.createElement('div');
      detailsPopupDate.classList.add("details-popup-dueDate");
      detailPopup.appendChild(detailsPopupDate);

      const popupDateHeading = document.createElement('h3');
      popupDateHeading.textContent = 'Due Date: ';
      detailsPopupDate.appendChild(popupDateHeading);

      const popupDateContent = document.createElement('span');
      popupDateContent.classList.add('span');
      popupDateContent.textContent = `${itemData.date}`;
      detailsPopupDate.appendChild(popupDateContent);

      //Details

      const detailsPopupDetail = document.createElement('div');
      detailsPopupDetail.classList.add("details-popup-details");
      detailPopup.appendChild(detailsPopupDetail);

      const popupDetailHeading = document.createElement('h3');
      popupDetailHeading.textContent = 'Details: ';
      detailsPopupDetail.appendChild(popupDetailHeading);

      const popupDetailContent = document.createElement('span');
      popupDetailContent.classList.add('span');
      popupDetailContent.textContent = `${itemData.detail}`;

      detailsPopupDetail.appendChild(popupDetailContent);

      const btnClose = document.createElement('button');
      btnClose.classList.add('details-popup-close');
      btnClose.textContent = 'Done';
      btnClose.addEventListener('click', () => {
        document.getElementById('overlayDetail').style.display = 'none';
      });
      detailPopup.appendChild(btnClose);

      const overlayDetail = document.createElement('div');
      overlayDetail.classList.add('overlay-new');
      overlayDetail.setAttribute('id', 'overlayDetail'); //need to change id or class name for style

      const main2 = document.querySelector('.main2');
      main2.textContent = '';
      main2.appendChild(overlayDetail);

      overlayDetail.appendChild(detailPopup);
    });

    todoNewElement.appendChild(todoDetail);

    const todoDate = document.createElement('div');
    todoDate.classList.add('todo__date');

    const dateValue = obj.date;
    const dateObj = parseISO(dateValue);
    const dateFormat = format(dateObj, 'MMMM dd, yyyy');
    const t = document.createTextNode(dateFormat);
    todoDate.appendChild(t);
    todoNewElement.appendChild(todoDate);

    todoNewElement.appendChild(getImg('image/square-edit-outline-custom.png', 'square-edit-outline-custom', ' Edit ', index));

    const delItem = getImg('image/delete-custom.png', 'delete-custom', ' Delete ', index);
    delItem.addEventListener("click", (event) => {

      const indexToDelete = event.target.dataset.index;
      data.splice(indexToDelete, 1);
      localStorage.setItem("data", JSON.stringify(data));
      displayData();

    });
    todoNewElement.appendChild(delItem);

  });
}

document.addEventListener('DOMContentLoaded', function () {

  // Get reference to the HTML button element
  const resetButton = document.getElementById("resetButton");

  // Add an event listener to the reset button
  resetButton.addEventListener("click", () => {
    // Replace the existing data in local storage with the sample data
    data = [
      { title: "Sample1", detail: "Sample Detail 1", date: "2023-04-26", priority: "Medium" },
      { title: "Sample2", detail: "Sample Detail 2", date: new Date().toISOString().split('T')[0], priority: "High" },
      { title: "Sample3", detail: "Sample Detail 3", date: isoNextWeek, priority: "Low" },
      { title: "Sample4", detail: "Sample Detail 4", date: new Date().toISOString().split('T')[0], priority: "Low" },
      { title: "Sample5", detail: "Sample Detail 5", date: new Date().toISOString().split('T')[0], priority: "High" },
      { title: "Sample6", detail: "Sample Detail 6", date: isoNextWeek, priority: "High" },
      { title: "Sample7", detail: "Sample Detail 7", date: new Date().toISOString().split('T')[0], priority: "Medium" }
    ];

    localStorage.setItem("data", JSON.stringify(data));

    // Display the updated data on the website
    displayData();
  });

});

function getImg(src, alt, title, dataIndex) {
  const img = document.createElement('img');
  img.classList.add("todo__icon");
  img.src = src;
  img.alt = alt;
  img.title = title;
  img.dataset.index = dataIndex;

  return img;
}

export default createTodo;