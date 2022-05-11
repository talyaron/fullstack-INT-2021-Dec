////// const root = document.querySelector('.root')

// ////Functions

////// function handleNote(ev: any) {
//////   ev.preventDefault();


//////   const elements = ev.target.elements;
//////   const result = {};
//////   for (let i = 0; i < elements.length; i++) {
///////       if (elements[i].type === "text") {
///////        result[elements[i].name] = elements[i].value;
///////       } else if (elements[i].name && elements[i].value) {
///////       result[elements[i].name] = elements[i].value;
//////   }
    
////// }
//////   console.log(result);
  

//////   root.innerHTML += `<div>${result.note}</div>`
////// }


// Form reference
const form = {}
form.noteText = document.querySelector('#formNoteText');
form.addButton = document.querySelector('#formAddButton');
form.color = document.querySelector('#formColor');

const notes = document.querySelector('#notes');

form.noteText.focus();

// Functions
function addNote() {
  let text = form.noteText.value;
  let note = document.createElement('div');
  let deleteButton = document.createElement('span');

  note.classList.add('note');
  note.classList.add(form.color.value);
  note.innerHTML = `<div class='note-text'>${text}</div>`;
  deleteButton.classList.add('note-delete');
  deleteButton.innerHTML = '&times;';

  note.appendChild(deleteButton);  
  notes.appendChild(note);

  form.noteText.value = '';
  form.noteText.focus();

  addListenerDeleteButton(deleteButton);
}

function addListenerDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', function (e) {
    e.stopPropagation();      
    deleteNote(e);
  });
}

function deleteNote(e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
}



// Event 
form.addButton.addEventListener('click', function (e) {
  e.preventDefault();  
  if (form.noteText.value != '') {
    addNote();
  }
})

