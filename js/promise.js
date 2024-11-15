const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("executed promise");
        resolve("success");
    }
);
mypromise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log("error is",err);
}).finally(()=>{
    console.log("executed finally block");
});