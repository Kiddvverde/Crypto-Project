import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
    try {
        res.render("index.ejs");
    } catch (error) {
        res.status(500).send(`Parece que hubo un errror!: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});