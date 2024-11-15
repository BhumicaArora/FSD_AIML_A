function register(cb){
    setTimeout(()=>{
        console.log("Register End");
        cb();
    },3000);
}
function sendmail(cb){
   // waitforthreesecond();
    setTimeout(()=>{
        console.log("email send");
        cb();
    },2000);
}
function login(cb){
    setTimeout(()=>{
        console.log("login end");
        cb();
    },2000);
}
function getdata(cb){
    setTimeout(()=>{
        console.log("get your data");
        cb();
    },2000);
}
function displaydata(){
    console.log("display your data");
}

//function waitforthreesecond(){
  //  const ms=3000+new Date().getTime();
    //while(ms>new Date()){}}

console.log("work other application");
//known as call back hell
register(function(){
    sendmail(function(){
        login(function(){
            getdata(function(){
                displaydata();
            });
        });
    });
});