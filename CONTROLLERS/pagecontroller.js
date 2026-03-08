import path from "path";

const root = path.resolve();

export const mainPage = (req,res)=>{
    res.sendFile(path.join(root,"views","main.html"));
}

export const formPage = (req,res)=>{
    res.sendFile(path.join(root,"views","form.html"));
}