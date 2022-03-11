import React from "react";
import NavBar from "./NavBar";

function HomeBanner({user,handleLogoutClick,setUsersPlantsFunction}){
    return(
    <div className="homepage">
         <div id="title-banner">
        
       </div> 
        <NavBar setUsersPlantsFunction={setUsersPlantsFunction} handleLogoutClick={handleLogoutClick} user={user}/>
        </div>
    )
}
export default HomeBanner