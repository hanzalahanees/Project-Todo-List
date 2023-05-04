function createProject() {
    const createProject = document.createElement("div");
    createProject.classList.add('create-project');
    createProject.setAttribute("id", 'projects');
  
    const projectForm = document.createElement('form');
    projectForm.setAttribute('id', 'create-project-form');
    // form.setAttribute('action','');
    // form.setAttribute('method','');
    createProject.appendChild(projectForm);
  
    const projectInputHolder = document.createElement('div');
    projectInputHolder.classList.add('input');
    projectForm.appendChild(projectInputHolder);
  
    const projectTitleLabel = document.createElement('label');
    projectTitleLabel.setAttribute('for', 'project');
    projectTitleLabel.textContent = 'Project Title: ';
    projectInputHolder.appendChild(projectTitleLabel);
  
    const projectInputTitle = document.createElement('input');
    projectInputTitle.setAttribute('type', 'text');
    projectInputTitle.setAttribute('name', 'project');
    projectInputTitle.setAttribute('id', 'project');
    projectInputTitle.setAttribute('placeholder', 'Project Title');
    // projectInputTitle.setAttribute('required', '');
    projectInputHolder.appendChild(projectInputTitle);
  
    const createProjectBtn = document.createElement('button');
    createProjectBtn.classList.add('btn-create-new', 'btn-create-project');
    createProjectBtn.setAttribute('type', 'submit');
    createProjectBtn.setAttribute('id', 'add-todo');
    createProjectBtn.textContent = 'Create Project';
    projectForm.appendChild(createProjectBtn);
  
    return createProject;
  }
  export default createProject;