# CS601_HW2_Johnson



To get this project to work via local hosting I used Express. To do the same follow these steps in the terminal. 
1. node -e "require('child_process').execSync('npm init -y', {stdio: 'inherit'})"
2. node -e "require('child_process').execSync('npm install express', {stdio: 'inherit'})"
3. node server.js
3 ctrl + click on the localhost:3000

Otherwise for testing purposes you can run through the HTml file if local hosting is not required at the time, however the fetch function will not work without local hosting.

If you already have the server installed and I believe I included it in this project simply type into your terminal node server.js and ctrl + click the local host to open in browser

I had quite a bit of trouble with local hosting and trying to figure it all out. So ultimately I amde most of the assignment through no fetch function and implemented this towards the end. the use of express kind of saved me as node.js was not really working for me for some reason when trying it in terminal. Ultimately I was able to get it to run local hosting but as you can tell from the huge node modules folder I ended up having the entire download of express in this project for the server to properly work for me. 

---

## 🧩 Project Overview
This project, **"Fruit and Vegetable Sorter"**, demonstrates the use of **HTML5 Drag-and-Drop**, the **Fetch API**, and **asynchronous JavaScript** to dynamically retrieve and manipulate categorized data from a JSON source.  

The application allows users to drag images of fruits and vegetables into their respective baskets.  
Each item is defined in a JSON file (`items.json`) that contains two categories — fruits and vegetables — with five items each.  
When the app loads, the data is fetched asynchronously using the Fetch API and rendered dynamically on the page.  

Once all items have been sorted correctly, the application displays a green animated “🎉 Congrats!” message to indicate successful completion.

---

## ⚙️ Features and Functionality
- **Asynchronous Data Fetching:**  
  Uses the Fetch API to load categorized data from `items.json` through an Express local server.

- **Dynamic DOM Generation:**  
  Uses higher-order functions like `forEach()` and array spreading (`...`) to merge data categories and dynamically create draggable images.

- **HTML5 Drag-and-Drop API:**  
  Implements `dragstart`, `dragover`, and `drop` events to control item movement and ensure category validation.

- **Category Validation Logic:**  
  Each image is tagged with its category (`fruit` or `vegetable`) so it can only be dropped into the matching container.

- **Real-Time Interaction:**  
  Items disappear from the selection area once dropped correctly, and incorrect drops trigger alert messages.

- **Completion Detection:**  
  When all 10 items are placed correctly, the app displays a green, animated congratulation message at the bottom of the screen.

- **Responsive Layout:**  
  The design uses Flexbox for spacing, with enlarged images and adaptive baskets positioned near the bottom of the viewport.

- **Fixed Footer:**  
  Includes a footer bar that remains visible at the bottom of the page.

---

## 🚀 How It Works
1. When the app starts, `script.js` fetches data from `items.json`.
2. Each item’s `img`, `name`, and `category` are extracted and rendered dynamically.
3. The user drags items from the selection area into the appropriate drop zone.
4. On a correct drop:
   - The item disappears from the top area.
   - A smaller image appears inside the matching basket.
5. When all items are sorted correctly, a **green “Congrats!”** banner animates onto the screen.

---

## 💡 Technologies Used
- **HTML5** — for structure and semantic layout  
- **CSS3 (Flexbox, Transitions)** — for responsive, clean design  
- **JavaScript (ES6)** — for event-driven logic  
- **Fetch API** — for asynchronous data retrieval  
- **Node.js + Express** — for local hosting and HTTP serving of JSON

---

## 🧩 Challenges and Lessons Learned
This project was a deep dive into client-side interactivity and asynchronous JavaScript.  
The most challenging part was configuring local hosting so that the Fetch API could properly access `items.json`.  
Initially, the application was built without Fetch for testing, and Express was later introduced to meet assignment requirements.  
Through experimentation and persistence, I successfully implemented a working Node/Express server and integrated asynchronous fetching with drag-and-drop interactivity.

---

## 🖼️ Image Credits
All images used in this project were sourced from [Flaticon.com](https://www.flaticon.com).

---

## 👤 Author
**Cole Johnson**  




















All images are from flaticon.com