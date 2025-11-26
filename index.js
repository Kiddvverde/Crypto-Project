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
app.use(express.bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});