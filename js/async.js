async function authenticate() {
    try{
        await register();
        await sendmail();
        await login();
        await getdata();
        await displaydata();
    }
    catch(err){
        console.log("error",err);
    }
}
authenticate();
console.log("work other application");