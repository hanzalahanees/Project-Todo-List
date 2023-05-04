import createNewSidebar from './createNewSidebar'
import mainContent from './mainContent'

function createNewContainer() {
  const container = document.createElement('div');
  container.classList.add('createNew-container');;
  container.setAttribute('id', "createNewContainer");

  //sidebar
  container.appendChild(createNewSidebar());

  //main-content
  container.appendChild(mainContent());

  return container;
}

export default createNewContainer;