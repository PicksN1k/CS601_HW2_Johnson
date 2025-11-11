const dragItem = document.getElementById('drag-item');
const dropZone = document.getElementById('drop-zone');

// Event listeners for the draggable item
dragItem.addEventListener('dragstart', ev => {
  ev.dataTransfer.setData('text', ev.target.id);
  ev.target.classList.add('dragging'); // Add the class to change the border
});

dragItem.addEventListener('drag', ev => ev.target.classList.add('dragging'));

dragItem.addEventListener('dragend', ev => {
  ev.target.classList.remove('dragging');
}); // Remove the class once dragging ends

// Event listeners for the drop zone
dropZone.addEventListener('dragover', ev => ev.preventDefault()); // Necessary to allow the drop

dropZone.addEventListener('drop', ev => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  const draggableElement = document.getElementById(data);
  ev.target.appendChild(draggableElement);
  ev.target.style.border = '2px dashed #ccc'; // Reset border if needed
  ev.target.style.backgroundColor = "";
});

dropZone.addEventListener('dragenter', ev => {
  ev.target.style.border = '2px dashed blue'; // Highlight for user feedback
  ev.target.style.backgroundColor = 'yellow'
});

dropZone.addEventListener('dragleave', ev => {
  ev.target.style.border = '2px dashed #ccc'; // Reset border if needed
  ev.target.style.backgroundColor = "None";
});
fetch("items.json")
  .then(res => res.json())
  .then(data => {
    const out = document.getElementById("output");
    out.innerHTML = `
      <h2>Fruits</h2>
      <ul>${data.fruits.map(f => `<li>${f.name}</li>`).join("")}</ul>
      <h2>Vegetables</h2>
      <ul>${data.vegetables.map(v => `<li>${v.name}</li>`).join("")}</ul>
    `;
  })
  .catch(err => console.error("Error fetching JSON:", err));