import {React,useEffect} from "react";
import Login from "../Forms/Login";
import SignUp from "../Forms/SignUp";
import HomeBanner from "../bars/HomeBanner";
import giphy1 from "../public/giphy1.gif"
import giphy from "../public/giphy.gif"

export default function HomePage({ user,setUser,handleLogoutClick,setLoginModalShow,loginModalShow,signupModalShow,setSignupModalShow}) {

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json()
            .then((user) => setUser(user));
          }
        });
      }, []);

    return (
        user?
        <div className="Home">
             <HomeBanner handleLogoutClick={handleLogoutClick} user={user}/>
        <div className="lander">
            <div id="firstGif" className="homePlantGif">
                <img src={giphy1} style={{width:"480", height:"480"}} alt="waving plant gif"/>
            </div>
            <div id="nameSpace">
               <h1>Hi {user.name},</h1>
            <p className="text-muted">Let's Track Your Plants</p> 
            <a href="/nursery"><button>Get Started</button></a>
            </div>
            
            <div id="lastGif" className="homePlantGif">
            <img src={giphy1} style={{width:"221", height:"480"}} alt="waving plant gif"/>
            </div>
        </div>
    </div>
    : <div className="Home">
     <HomeBanner handleLogoutClick={handleLogoutClick} user={user}/>
            <div className="lander">
                 <div id="firstGif" className="homePlantGif">
                 <img src={giphy1} style={{width:"480", height:"480"}} alt="waving plant gif"/>
            </div>
            <div id="nameSpace">
                <h1>Nursery</h1>
                <p className="text-muted">Track Your Plants</p>
                <button type="button" id="serviceCreateButton" className="button" onClick={()=> setSignupModalShow(true)}>Sign Up</button> 
                    <SignUp show={signupModalShow} handleClose={()=> setSignupModalShow(false)}/>
                <button type="button" id="serviceCreateButton" className="button" onClick={()=> setLoginModalShow(true)}>Sign In</button> 
                    <Login  show={loginModalShow} setUser={setUser} handleClose={()=> setLoginModalShow(false)}/>
            </div>
            <div id="lastGif" className="homePlantGif">
            <img src={giphy} style={{width:"221", height:"480"}} alt="waving plant gif"/>
            </div>
                
            </div>
        </div> 
    )
}