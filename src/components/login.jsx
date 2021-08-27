import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth} from "../firebase";
import {signInWithEmailAndPassword} from "../firebase"
let Login = () => {
    let history= useHistory();
    let user=useSelector(state=>state.user)
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
  return (
    <>
    {user?<Redirect to= "/home" />:""}
    <div className="row">
        <div className="col-4 offset-4">
        <h1 className="mt-4 mb-4">Login</h1>
        <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
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
        <button onClick={(e)=>{
          e.preventDefault();
          signInWithEmailAndPassword(auth,email,password);
        }} type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        <hr />
        <br />
        <button onClick={()=>{
            history.push("/signup")
        }} type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
        </div>
    </div>
    </>
  );
};

export default Login;
