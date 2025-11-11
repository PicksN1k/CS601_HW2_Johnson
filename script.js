let correctDrops = 0;
let totalItems = 0;

// Fetch JSON data asynchronously
fetch("items.json")
  .then(response => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .then(data => {
    const itemArea = document.getElementById("item-area");
    const allItems = [...data.fruits, ...data.vegetables];
    totalItems = allItems.length;

    // Create draggable images
    allItems.forEach(item => {
      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.draggable = true;
      img.classList.add("draggable");
      img.dataset.category = item.category.toLowerCase();

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

    zone.addEventListener("dragleave", () => zone.classList.remove("dragover"));

    zone.addEventListener("drop", e => {
      e.preventDefault();
      zone.classList.remove("dragover");

      const type = e.dataTransfer.getData("type");
      const src = e.dataTransfer.getData("src");
      const alt = e.dataTransfer.getData("alt");
      const draggedImg = [...document.getElementById("item-area").children].find(img => img.alt === alt);

      if (
        (zone.id === "fruit-zone" && type === "fruit") ||
        (zone.id === "vegetable-zone" && type === "vegetable")
      ) {
        const droppedImg = document.createElement("img");
        droppedImg.src = src;
        droppedImg.alt = alt;
        droppedImg.style.width = "100px";
        droppedImg.style.margin = "0.4em";
        zone.appendChild(droppedImg);

        if (draggedImg) draggedImg.remove();
        correctDrops++;

        if (correctDrops === totalItems) showCongrats();
      } else {
        alert(`❌ ${alt} does not belong here!`);
      }
    });
  });
}

function showCongrats() {
  const message = document.getElementById("congrats-message");
  message.style.display = "block";
  message.animate(
    [
      { opacity: 0, transform: "scale(0.8)" },
      { opacity: 1, transform: "scale(1.1)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    { duration: 1000, easing: "ease-out" }
  );
}