import express from "express";
import pageRoutes from "./routes/pageRoutes.js";
import verifyRoutes from "./routes/verifyRoutes.js";
import { checkage } from "./middleware/ageMiddleware.js";

const app = express();

app.use(express.urlencoded({extended:true}));

// static images
app.use("/images", express.static("public/images"));

// verify route
app.use(verifyRoutes);

// middleware
app.use(checkage);

// pages
app.use(pageRoutes);

// 404
app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});

app.listen(3200,()=>{
    console.log("Server running on port 3200");
});