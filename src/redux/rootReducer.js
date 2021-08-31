import { combineReducers } from "redux";
import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer";
import detailReducer from "./reducers/detailReducer";
import {saveReducer} from "./reducers/saveReducer"
let rootReducer=combineReducers({
    template:templateReducer,
    user:userReducer,
    details:detailReducer,
    save:saveReducer,
})

export default rootReducer;