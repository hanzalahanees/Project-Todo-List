import createNewHeader from './createNewHeader'
import createNewContainer from './createNewContainer'

function createNew() {
  const createNewItem = document.createElement('div');
  createNewItem.classList.add('create-new');

  //header
  createNewItem.appendChild(createNewHeader());
  
  //container
  createNewItem.appendChild(createNewContainer());

  return createNewItem;
}

function overlayNewEntryForm() {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay-new');
  overlay.setAttribute('id', 'overlay');
  overlay.appendChild(createNew());
  // overlay.appendChild(createDetailsPopup());

  return overlay;
}

function loadCreateNew(){

  const main2 = document.querySelector('.main2');
  main2.textContent = '';
  main2.appendChild(overlayNewEntryForm());
}
export default loadCreateNew;