import {React,useState,useEffect} from "react";
import Login from "../Forms/Login";
import SignUp from "../Forms/SignUp";
import HomeBanner from "../bars/HomeBanner";

export default function HomePage({user,setUser}) {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [signupModalShow, setSignupModalShow] = useState(false);
    console.log(user)

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
             <HomeBanner title="ABOUT US"/>
        <div className="lander">
            <div id="firstGif" className="homePlantGif">
                <iframe src="https://giphy.com/embed/EpwNE7ewhFOwOdt82i" width="480" height="480" frameBorder="0" class="giphy-embed"></iframe>
            </div>
            <div id="nameSpace">
               <h1>Hi {user.name},</h1>
            <p className="text-muted">Let's Track Your Plants</p> 
            <a href="/nursery"><button>Get Started</button></a>
            </div>
            
            <div id="lastGif" className="homePlantGif">
            <iframe src="https://giphy.com/embed/Vv2KPGwl84NGdkciAB" width="221" height="480" frameBorder="0" class="giphy-embed"></iframe>
            </div>
        </div>
    </div>
    :<div className="Home">
            <div className="lander">
                <h1>Nursery</h1>
                <p className="text-muted">Track Your Plants</p>
                <button type="button" id="serviceCreateButton" className="button" onClick={()=> setSignupModalShow(true)}>Sign Up</button> 
                    <SignUp show={signupModalShow} handleClose={()=> setSignupModalShow(false)}/>
                <button type="button" id="serviceCreateButton" className="button" onClick={()=> setLoginModalShow(true)}>Sign In</button> 
                    <Login show={loginModalShow} setUser={setUser} handleClose={()=> setLoginModalShow(false)}/>
            </div>
        </div> 
    )
}