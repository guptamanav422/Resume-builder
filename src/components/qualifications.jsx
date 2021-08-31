import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import {detailCreator} from "../redux/actions/detailActions"
import Preview from "./preview"
import "./css/form.css"
let Qualifications=()=>{
    let dispatch= useDispatch();
    let history=useHistory();
    let {degree,year,cgpa,college}= useSelector(state=>state.details);
    return(
        <>
        <div className="qual-container">
                <div className="personal-form">
                <h2 className="m-4">Professional Details</h2>
                    <div class="row m-3">
                        <div class="col-5">
                            <input type="text"
                             class="form-control" 
                             placeholder="Degree"
                             value={degree}
                             onChange={(e)=>{
                                 dispatch(detailCreator({degree:e.currentTarget.value }))
                             }}
                            />
                        </div>
                        <div class="col-5">
                            <input
                            value={college}
                             onChange={(e)=>{
                                 dispatch(detailCreator({college:e.currentTarget.value }))
                             }}
                              type="text" class="form-control" placeholder="College name" />
                        </div>
                        <div class="col-5">
                            <input 
                            value={cgpa}
                             onChange={(e)=>{
                                 dispatch(detailCreator({cgpa:e.currentTarget.value }))
                             }}
                            type="number" class="form-control" placeholder="CGPA" />
                        </div>
                        <div class="col-5">
                            <input
                            value={year}
                             onChange={(e)=>{
                                 dispatch(detailCreator({year:e.currentTarget.value }))
                             }}
                             type="number" class="form-control" placeholder="year of grad"/>
                        </div>
                        <div class="form-check m-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                        </div>
                    </div>
                    <button 
                    onClick={()=>{
                        history.push("/personal");
                    }}
                    className="btn btn-primary m-4">BACK</button>
                    <br />
                    <br />
                </div>

                <Preview />
            </div>
        </>
    )
}

export default Qualifications;