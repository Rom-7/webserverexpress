const express = require("express");
const hbs = require("hbs");

const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname + "/public"));
//express hbs engine
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/parciales");
hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
});

app.get("/", (req, res) => {
    res.render("home", { nombre: "Rom" });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});