import { useHistory } from "react-router-dom";

let Signup=()=>{

    let history=useHistory();
    return(
        <>
        <div className="row">
        <div className="col-4 offset-4">
        <h1 className="mt-4 mb-4">Sign up!</h1>
        <form className="mt-4">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword2" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Sign up
        </button>
        <br />
        <hr />
        <br />
        <button onClick={()=>{
            history.push("/login")
        }} type="submit" class="btn btn-primary">
          Login 
        </button>
      </form>
        </div>
    </div>
        </>
    )
}

export default Signup;