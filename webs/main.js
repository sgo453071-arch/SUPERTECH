import express from "express";
import path from "path";

const app = express();
const abspath = path.resolve();

// ✅ Middleware to read form data
app.use(express.urlencoded({ extended: true }));

let verified = false;

// ✅ Age check middleware
function checkage(req, res, next) {

    if (verified) {
        next();
    } 
    else {
        res.sendFile(path.join(abspath, "age.html"));
    }

}

// ✅ Verify age route
app.get("/verify", (req, res) => {

    const age = req.query.age;

    if (age >= 18) {
        verified = true;
        res.redirect("/");
    } 
    else {
        res.send("Access Denied. Age must be 18+");
    }

});

// ✅ Apply middleware
app.use(checkage);

// ✅ Serve static files
app.use(express.static(abspath));

// ✅ Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(abspath, "main.html"));
});

// ✅ Home page route
app.get("/home.html", (req, res) => {
    res.sendFile(path.join(abspath, "home.html"));
});

// ✅ FORM SUBMISSION ROUTE
app.post("/submit", (req, res) => {

    console.log("Form Data Received:");
    console.log(req.body);

    res.send("Form Submitted Successfully!");

});

// ✅ 404 handler
app.use((req, res) => {
    res.status(404).send("PAGE NOT FOUND");
});

// ✅ Start server
app.listen(3200, () => {
    console.log("Server running on port 3200");
});