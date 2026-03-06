import express from "express";
import path from "path";

const app = express();
const abspath = path.resolve();

let verified = false;

// middleware
function ageMiddleware(req,res,next){

    if(verified){
        next();
    }
    else{
        res.sendFile(path.join(abspath,"age.html"));
    }
}

// age verification route
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

// protected route
app.get("/", ageMiddleware ,(req,res)=>{
    res.sendFile(path.join(abspath,"main.html"));
});

app.listen(3201,()=>{
    console.log("Server running on port 3200");
});