import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import {detailCreator} from "../redux/actions/detailActions"
import Preview from "./preview"
import "./css/form.css"
import {saveResume} from "../redux/actions/saveActions"
let Qualifications=()=>{
    let dispatch= useDispatch();
    let history=useHistory();
    let {degree,year,cgpa,college,isPublic}= useSelector(state=>state.details);

    let details= useSelector(state=>state.details)
    let code=useSelector(state=>state.template);
    let {uid}=useSelector(state=>state.user)
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
                        <input 
                        check={isPublic}
                        onClick={(e)=>{
                            // console.log(e.currentTarget.checked);
                            dispatch(detailCreator({year:e.currentTarget.checked}))
                        }}
                        class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Make Public
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
            <button className="btn btn-primary qual-gen">Generate Link</button>
            <button 
            onClick={()=>{
                dispatch(saveResume(uid,details,code))
            }}
            className="btn btn-primary qual-save">Save to Database</button>
        </>
    )
}

export default Qualifications;