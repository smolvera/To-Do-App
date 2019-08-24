const express = require("express");

// Instantiating an instance of express
const app = express();

// Initializing Middleware
app.use(express.json({ extended: false }));

// Connect to Database

// Define Routes


// Define Port environment
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
