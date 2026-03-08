import express from "express";
import path from "path";
import { submitForm } from "../controllers/formController.js";

const router = express.Router();
const root = path.resolve();

router.get("/", (req,res)=>{
    res.sendFile(path.join(root,"views","main.html"));
});

router.get("/home.html", (req,res)=>{
    res.sendFile(path.join(root,"views","home.html"));
});

router.get("/form.html", (req,res)=>{
    res.sendFile(path.join(root,"views","form.html"));
});
router.post("/submit", submitForm);

router.get("/about.html", (req,res)=>{
    res.sendFile(path.join(root,"views","about.html"));
});

router.get("/service.html", (req,res)=>{
    res.sendFile(path.join(root,"views","service.html"));
});

router.get("/contact.html", (req,res)=>{
    res.sendFile(path.join(root,"views","contact.html"));
});

export default router;