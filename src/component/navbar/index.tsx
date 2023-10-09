import React from "react";
import "./style.css";

interface Nav
const Nav:React.FC = () => {
   return (
      <nav></nav>



      <div className="col-12 d-flex justify-content-between px-5 flex-row bg-info text-danger">
         <div className="col-3">
            <h1>Logo</h1>
         </div>
         <div className="d-flex flex-row gap-5">
            <a href=""><h2>Home</h2></a>
            <a href=""><h2>Contact</h2></a>
            <a href=""><h2>Product</h2></a>
            <a href=""><h2>About</h2></a>
            
         </div>
      </div>

   )
}

export default Nav;