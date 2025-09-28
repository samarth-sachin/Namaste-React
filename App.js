import React from "react";
import ReactDOM from "react-dom/client"
const Headingjsx=()=>{
return <h1 id="heading"> samarth1 </h1>
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const Run=()=>(
    <><Headingjsx /><h1 id="heal">samarth</h1></>
);
root.render(<Run/>);