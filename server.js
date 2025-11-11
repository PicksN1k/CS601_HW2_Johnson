const express = require("express");
const app = express();
const PORT = 3000;

// serve static files (HTML, CSS, JS, JSON)
app.use(express.static(__dirname));

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});