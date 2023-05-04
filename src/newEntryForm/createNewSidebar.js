function createNewSidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('createNewSidebar');

  //todo

  const todoBtn = document.createElement('button');
  todoBtn.classList.add('btn');
  todoBtn.textContent = "Todo";
  todoBtn.addEventListener('click', () => {
    document.getElementById('todo').style.display = 'block';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('notes').style.display = 'none';
  });
  sidebar.appendChild(todoBtn);

  //project
  const projectBtn = document.createElement('button');
  projectBtn.classList.add('btn');
  projectBtn.textContent = "Project";
  projectBtn.addEventListener('click', () => {
    document.getElementById('todo').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('notes').style.display = 'none';

  });
  sidebar.appendChild(projectBtn);

  //Note
  const noteBtn = document.createElement('button');
  noteBtn.classList.add('btn');
  noteBtn.textContent = "Note";
  noteBtn.addEventListener('click', () => {
    document.getElementById('todo').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('notes').style.display = 'block';

  });
  sidebar.appendChild(noteBtn);

  return sidebar;
}
export default createNewSidebar;