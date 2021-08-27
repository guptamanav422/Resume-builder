import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth,createUserWithEmailAndPassword } from "../firebase";
let Signup=()=>{

    let [password,setPassword]=useState("");
    let [confirmPassword,setConfirmPassword]=useState("");
    let [email,setEmail]=useState("");
    let history=useHistory();
    let user=useSelector(state=>state.user);
    return(
        <>
         {user?<Redirect to= "/home" />:""}
        <div className="row">
        <div className="col-4 offset-4">
        <h1 className="mt-4 mb-4">Sign up!</h1>
        <form className="mt-4">
        <div className="mb-3">
          <label  htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e)=>{
                setEmail(e.currentTarget.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=>{
                setPassword(e.currentTarget.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            value={confirmPassword}
            onChange={(e)=>{
                setConfirmPassword(e.currentTarget.value)
            }}
          />
        </div>
        <button onClick={(e)=>{
            e.preventDefault();
            if(password===confirmPassword){
                createUserWithEmailAndPassword(auth,email,password)
                .then(()=>{
                  alert("You are successfully signed In");
                })
                .catch((error)=>{
                  alert("Please check your credentials")
                })
                setPassword("");
                setConfirmPassword("");
                setEmail("");
            }
            else{
              alert("Your password are not same");
              setPassword("");
                setConfirmPassword("");

            }
        }} type="submit" className="btn btn-primary">
          Sign up
        </button>
        <br />
        <hr />
        <br />
        <button onClick={(e)=>{
            history.push("/login")
        }} type="submit" className="btn btn-primary">
          Login 
        </button>
      </form>
        </div>
    </div>
        </>
    )
}

export default Signup;