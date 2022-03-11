import React from "react";
import Login from "../Forms/Login";
import HomeBanner from "../bars/HomeBanner";
import giphy1 from "../public/giphy1.gif"
import giphy from "../public/giphy.gif"

 function Rescue({loginModalShow,setLoginModalShow,setUser,user}) {

  return (
    <>
    <HomeBanner  user={user}/>
    <div className="lander">
    <div id="firstGif" className="homePlantGif">
    <img src={giphy1} style={{width:"480", height:"480"}} alt="waving plant gif"/>
    </div>
    <div className="NotFound text-center" id="nameSpace">
      <h3>Sorry, page not found!</h3>
      <p>Please Return <a href="/">Home</a></p><br/>
      <p>or Sign In to Continue</p><br/>
      <button type="button" id="serviceCreateButton" className="button" onClick={()=> setLoginModalShow(true)}>Sign In</button> 
          <Login show={loginModalShow} setUser={setUser} handleClose={()=> setLoginModalShow(false)}/>
    </div>
    
    <div id="lastGif" className="homePlantGif">
    <img src={giphy} style={{width:"221", height:"480"}} alt="waving plant gif"/>
    </div>
</div>
</>
  );
}
export default Rescue;