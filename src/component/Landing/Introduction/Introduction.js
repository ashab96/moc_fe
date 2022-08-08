import React, { lazy} from "react";
// import { Link } from "react-router-dom";
import "./Introduction.css";
// import Header from "../../Common/Header/Header";

const Header = lazy(() => import("../../Common/Header/Header"));

function Introduction() {
    return (
        <div id="introduction">
        <Header></Header>
        </div>
    );
}

export default Introduction;