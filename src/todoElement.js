import loadDetailPopup from "./newEntryForm/createDetailsPopup";
import { format, parseISO } from 'date-fns';
function todoElement() {
  const myForm = document.getElementById("create-todo-form");
  const homeContainer = document.getElementById("homeContainer");

  myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(myForm);
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

    // Display the updated data on the website
    displayData();

  });

  function displayData() {
    // Clear the existing output
    homeContainer.innerHTML = "";

    // Loop through the data array and create HTML elements for each object
    data.forEach((obj, index) => {

      const todoNewElement = document.createElement('div');
      todoNewElement.classList.add('todo');
      homeContainer.appendChild(todoNewElement);

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
      todoDetail.textContent = 'Details';
      todoDetail.addEventListener('click', () => {

        // loadDetailPopup();
        loadDetailPopup();
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

      const delItem = getImg('image/delete-custom.png', 'delete-custom', ' Delete ');
      delItem.addEventListener("click", (event) => {

        const indexToDelete = event.target.dataset.index;
        data.splice(indexToDelete, 1);
        localStorage.setItem("data", JSON.stringify(data));
        displayData();

      });
      todoNewElement.appendChild(delItem);
    });
  }
}

function getImg(src, alt, title, dataIndex) {
  const img = document.createElement('img');
  img.classList.add("todo__icon");
  img.src = src;
  img.alt = alt;
  img.title = title;
  img.dataIndex = dataIndex;

  return img;
}

export default todoElement;