import express from "express";
import path from "path";

const app = express();
const abspath = path.resolve();

let verified = false;

function checkage(req,resp,next){

    if(verified){
        next();
    }
    else{
        resp.sendFile(path.join(abspath,"age.html"));
    }
}

app.get("/verify",(req,res)=>{

    const age = req.query.age;

    if(age >= 18){
        verified = true;
        res.redirect("/");
    }
    else{
        res.send("Access Denied. Age must be 18+");
    }

});

app.use(checkage);


// ✅ Serve static folder
app.use(express.static(abspath));

app.get("/", (req, res) => {
    res.sendFile(path.join(abspath, "main.html"));
});

app.get("/home.html", (req, res) => {
    res.sendFile(path.join(abspath, "home.html"));
});

// ✅ Correct 404 handler
app.use((req, res) => {
    res.status(404).send("PAGE NOT FOUND");
});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});