import React from "react";
import Main from "./layout/Main";
import Sidebar from "./layout/Sidebar";
import resume from "../utilities";

const Resume = () => (
  <div className="resume">
    <Sidebar resume={resume} />
    <Main />
  </div>
);

export default Resume;
