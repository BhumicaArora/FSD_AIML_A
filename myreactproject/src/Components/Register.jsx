import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
function register({setregData}){
    const [name,setName]=useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    function getData(e){
        e.preventDefault();
        const data={name,email,password}
        setregData(data);
        alert("registration successfull")
    }
    return(
        <div>
            <form>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text"onChange={(e)=>setName(e.target.value)} class="form-control" id="text" aria-describedby="emailHelp"/>
    <div id="textHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"onChange={(e)=>setemail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password"onChange={(e)=>setpassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
export default register;