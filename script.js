const itemArea = document.getElementById("item-area");
const allItems = [...itemsData.fruits, ...itemsData.vegetables];
let correctDrops = 0;
const totalItems = allItems.length;

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

      const draggedImg = [...itemArea.children].find(img => img.alt === alt);

      if (
        (zone.id === "fruit-zone" && type === "fruit") ||
        (zone.id === "vegetable-zone" && type === "vegetable")
      ) {
        // Add image to basket
        const droppedImg = document.createElement("img");
        droppedImg.src = src;
        droppedImg.alt = alt;
        droppedImg.style.width = "100px";
        droppedImg.style.margin = "0.4em";
        zone.appendChild(droppedImg);

        // Remove from selection
        if (draggedImg) draggedImg.remove();

        correctDrops++;

        // Auto-expand basket height if needed
        zone.style.height = "auto";
        zone.style.minHeight = "300px";

        // Check if all items are sorted
        if (correctDrops === totalItems) showCongrats();
      } else {
        alert(`❌ ${alt} does not belong here!`);
      }
    });
  });
}

// 🎉 Show congrats banner
function showCongrats() {
  const message = document.getElementById("congrats-message");
  message.style.display = "block";
  message.animate(
    [
      { opacity: 0, transform: "scale(0.8)" },
      { opacity: 1, transform: "scale(1.1)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    {
      duration: 1000,
      easing: "ease-out"
    }
  );
}