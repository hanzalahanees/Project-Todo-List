import createTodo from './createTodo'
import createProject from './createProject'
import createNote from './createNote'

function mainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main');
  mainContent.setAttribute('id', 'main');

  //create Todo 
  mainContent.appendChild(createTodo());

  //create Project
  mainContent.appendChild(createProject());

  //create Note
  mainContent.appendChild(createNote());

  return mainContent;
}
export default mainContent;