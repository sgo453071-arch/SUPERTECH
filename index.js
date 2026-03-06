const express = require('express');

const app = express();

app.get("", (req,res) => {
    res.end("<h1> BASIC NODE JS EXAMPLE</h1>");
}
);


app.get("/about", (req,res) => {
    res.end("<h1> BASIC NODE  EXAMPLE</h1>");
}
);

app.listen(2301);

