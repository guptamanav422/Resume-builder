import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./css/home.css"
import {templateCreator} from "../redux/actions/templateActions"
let Home=()=>{
    let user= useSelector(state=> state.user)
    let dispatch=useDispatch();
    let history=useHistory();
    return(
        <>
        {user?"Home":<Redirect to="/login" />}

        <div className="template-container">
            <div onClick={()=>{
                dispatch(templateCreator("A"));
                history.push("/personal")
            }} className="template">
                <img src="https://pilbox.themuse.com/image.jpg?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F40587%2Fb6734a6b-8c72-4bb1-9f9d-c3d9310c54c1.jpg%3Fv%3D14ffaea8b1654728f3e40090a4d547ee567f53c381048afb48a2e05ccbbbee2a&prog=1&w=780" alt="." />
            </div>
            <div onClick={()=>{
                dispatch(templateCreator("B"));
                history.push("/personal")
            }}className="template">
                <img src="https://d.novoresume.com/images/doc/simple-resume-template.png" alt="." />
            </div>
        </div>

        <button className="home-logout-btn btn-primary" onClick={()=>{
            auth.signOut();
        }}>Logout </button>
        </>
    )
}

export default Home;