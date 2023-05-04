function createNote() {
    const createNote = document.createElement('div');
    createNote.classList.add('create-note');
    createNote.setAttribute('id', 'notes');
  
    const noteForm = document.createElement('form');
    noteForm.setAttribute('id', 'create-note-form');
    // form.setAttribute('action','');
    // form.setAttribute('method','');
    createNote.appendChild(noteForm);
  
    const noteInputHolder = document.createElement('div');
    noteInputHolder.classList.add('input');
    noteForm.appendChild(noteInputHolder);
  
    const noteTitleLabel = document.createElement('label');
    noteTitleLabel.setAttribute('for', 'note');
    noteTitleLabel.textContent = 'Title: ';
    noteInputHolder.appendChild(noteTitleLabel);
  
    const noteInputTitle = document.createElement('input');
    noteInputTitle.setAttribute('type', 'text');
    noteInputTitle.setAttribute('name', '');
    noteInputTitle.setAttribute('id', 'note');
    noteInputTitle.setAttribute('placeholder', 'Write Title Here');
    noteInputTitle.setAttribute('required', '');
    noteInputHolder.appendChild(noteInputTitle);
  
    const noteTextareaHolder = document.createElement('div');
    noteTextareaHolder.classList.add("textarea");
    noteForm.appendChild(noteTextareaHolder);
  
    const noteDetailLabel = document.createElement("label");
    noteDetailLabel.setAttribute('for', 'note-detail');
    noteDetailLabel.textContent = "Details: ";
    noteTextareaHolder.appendChild(noteDetailLabel);
  
    const noteTextareaDetail = document.createElement('textarea');
    noteTextareaDetail.setAttribute('name', 'Details');
    noteTextareaDetail.setAttribute('id', 'note-detail');
    noteTextareaDetail.setAttribute('cols', '30');
    noteTextareaDetail.setAttribute('rows', '20');
    noteTextareaDetail.setAttribute('placeholder', 'Write Details Here');
    noteTextareaDetail.setAttribute('required', '');
    noteTextareaHolder.appendChild(noteTextareaDetail);
  
    const createNoteBtn = document.createElement('button');
    createNoteBtn.classList.add('btn-create-new', 'btn-create-note');
    createNoteBtn.setAttribute('type', 'submit');
    createNoteBtn.setAttribute('id', '');
    createNoteBtn.textContent = 'Create Note';
    noteForm.appendChild(createNoteBtn);
  
    return createNote;
  }
  export default createNote;