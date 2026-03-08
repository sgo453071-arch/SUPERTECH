import { setVerified } from "../middleware/ageMiddleware.js";

export const verifyAge = (req,res)=>{

    const age = req.query.age;

    if(age >= 18){
        setVerified(true);
        res.redirect("/");
    }
    else{
        res.send("Access Denied. Age must be 18+");
    }

}