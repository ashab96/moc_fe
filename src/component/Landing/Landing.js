import React, { lazy } from "react";
import "./Landing.css";

const Introduction = lazy(() =>
  import("./Introduction/Introduction")
);

function Landing() {

    return (
        <div id="landing-page">
          <Introduction />
        </div>
    );
};

export default Landing;