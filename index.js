const express = require("express")

const app = express()

app.get("/teste", (req, res) => {
    return res.json({ hello: "friend 2"})
});

app.listen(3333);