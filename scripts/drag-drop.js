// Get the elements
const fieldsPane = document.getElementById('fields-pane');
const dropZone = document.getElementById('add-drop-field');

// Add event listeners
fieldsPane.addEventListener('dragstart', handleDragStart);
fieldsPane.addEventListener('dragend', handleDragEnd);
dropZone.addEventListener('dragover', handleDragOver);
dropZone.addEventListener('drop', handleDrop);

// Function to handle drag start
function handleDragStart(event) {
  const target = event.target;
  event.dataTransfer.setData('text', target.textContent);
  event.dataTransfer.effectAllowed = 'move';
}

// Function to handle drag end
function handleDragEnd(event) {
  event.preventDefault();
}

// Function to handle drag over
function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

// Function to handle drop
function handleDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  const droppedField = document.createElement('input');
  droppedField.type = 'text';
  droppedField.value = data;
  dropZone.appendChild(droppedField);
}