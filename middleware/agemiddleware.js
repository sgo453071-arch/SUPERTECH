import path from "path";

const root = path.resolve();

let verified = false;

export function setVerified(value){
    verified = value;
}

export function checkage(req,res,next){

    if(verified){
        next();
    }
    else{
        res.sendFile(path.join(root,"views","age.html"));
    }

}