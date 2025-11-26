// Importes
import express from "express";
import axios from "axios";

// Config Express
const app = express();
const PORT = 3000;
const API_URL = "https://api.coinpaprika.com/v1/";

// Middlewares
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/coins", async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}coins`);
        const coins = response.data;
        console.log(coins);
        res.render("index.ejs", { coins });
    } catch (error) {
        console.error("Error fetching coins:", error);
        res.status(500).send("Error fetching coins");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});