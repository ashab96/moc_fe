import React, { lazy} from "react";
// import { useSelector } from "react-redux";
// import { useCookies } from "react-cookie";
// import { useDispatch } from "react-redux";
// import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import authActionCreator from "Redux/Action Creators/authActionCreators";


const Landing = lazy(() => import("../component/Landing/Landing"));

function Routes() {
    return(
        <div>
             <PublicRoute exact path="/" element={<Landing/>} />
        </div>
    );
}

export default Routes