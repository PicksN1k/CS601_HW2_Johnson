fetch("items.json")
  .then(res => res.json())
  .then(data => {
    const itemArea = document.getElementById("item-area");
    const allItems = [...data.fruits, ...data.vegetables];

    allItems.forEach(item => {
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.draggable = true;
      img.classList.add("draggable");
      img.dataset.category = item.category.toLowerCase();
      img.dataset.name = item.name;

      // Event: start dragging
      img.addEventListener("dragstart", e => {
        e.dataTransfer.setData("type", img.dataset.category);
        e.dataTransfer.setData("src", img.src);
        e.dataTransfer.setData("alt", img.alt);
      });

      itemArea.appendChild(img);
    });

    setupDropZones();
  })
  .catch(err => console.error("Error loading items.json:", err));

function setupDropZones() {
  const dropzones = document.querySelectorAll(".dropzone");

  dropzones.forEach(zone => {
    zone.addEventListener("dragover", e => {
      e.preventDefault();
      zone.classList.add("dragover");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("dragover");
    });

    zone.addEventListener("drop", e => {
      e.preventDefault();
      zone.classList.remove("dragover");

      const type = e.dataTransfer.getData("type");
      const src = e.dataTransfer.getData("src");
      const alt = e.dataTransfer.getData("alt");

      if (
        (zone.id === "fruit-zone" && type === "fruit") ||
        (zone.id === "vegetable-zone" && type === "vegetable")
      ) {
        const droppedImg = document.createElement("img");
        droppedImg.src = src;
        droppedImg.alt = alt;
        zone.appendChild(droppedImg);
      } else {
        alert(`❌ ${alt} does not belong here!`);
      }
    });
  });
}