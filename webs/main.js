import express from "express";
import path from "path";

const app = express();

// current directory (webs)
const webs = path.resolve();

// EXPRESS root folder
const root = path.join(webs, "..");

// folders
const images = path.join(root, "IMAGES");
const routers = path.join(root, "ROUTERS1");

app.use(express.urlencoded({ extended: true }));

// serve images
app.use("/IMAGES", express.static(images));

// serve router html files
app.use(express.static(routers));

// serve webs html files
app.use(express.static(webs));

let verified = false;


// AGE CHECK MIDDLEWARE
function checkage(req, res, next) {

    if (verified) {
        next();
    } else {
        res.sendFile(path.join(webs, "age.html"));
    }

}


// VERIFY AGE
app.get("/verify", (req, res) => {

    const age = req.query.age;

    if (age >= 18) {
        verified = true;
        res.redirect("/");
    } else {
        res.send("Access Denied. Age must be 18+");
    }

});


// APPLY MIDDLEWARE
app.use(checkage);


// MAIN PAGE
app.get("/", (req, res) => {
    res.sendFile(path.join(webs, "main.html"));
});


// FORM PAGE
app.get("/form.html", (req, res) => {
    res.sendFile(path.join(webs, "form.html"));
});


// FORM SUBMIT
app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Form Submitted Successfully");
});


// 404
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});


// SERVER
app.listen(3200, () => {
    console.log("Server running on port 3200");
});