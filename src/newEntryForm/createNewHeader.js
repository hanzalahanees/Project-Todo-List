function createNewHeader() {
  const createNewHeader = document.createElement('div');
  createNewHeader.classList.add('create-new-header');

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('title');
  headerTitle.textContent = "Create New...";
  createNewHeader.appendChild(headerTitle);

  const headerCancel = document.createElement('span');
  headerCancel.classList.add('cancel');
  const t = document.createTextNode('x');
  headerCancel.appendChild(t);
  headerCancel.setAttribute('title', ' Close ');
  headerCancel.addEventListener("click", () => {
    document.getElementById('overlay').style.visibility = 'hidden';
  });
  createNewHeader.appendChild(headerCancel);

  return createNewHeader;
}

export default createNewHeader;