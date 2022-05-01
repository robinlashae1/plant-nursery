import { React} from "react";
import Login from "../Forms/Login";
import SignUp from "../Forms/SignUp";
import HomeBanner from "../bars/HomeBanner";

 function HomePage({user,setUser,handleLogoutClick,setLoginModalShow,loginModalShow,signupModalShow,setSignupModalShow,}) {
     
  return user ? (
    <div className="Home">
      <HomeBanner handleLogoutClick={handleLogoutClick} user={user} />
      <div className="lander">
        <div id="nameSpace">
          <h1>Hi {user.name},</h1>
          <p className="text-muted">Let's Track Your Plants</p>
          <a href="/nursery">
            <button className="homeButtons">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="Home">
      <HomeBanner handleLogoutClick={handleLogoutClick} user={user} />
      <div className="lander">
        <div id="nameSpace">
          <h1>Welcome!</h1>
          <p className="text-muted">Track Your Plants</p>
          <button
            type="button"
            style={{ marginRight: "10px" }}
            className="homeButtons"
            onClick={() => setSignupModalShow(true)}
          >
            Sign Up
          </button>
          <SignUp
            show={signupModalShow}
            handleClose={() => setSignupModalShow(false)}
          />
          <button
            type="button"
            className="homeButtons"
            onClick={() => setLoginModalShow(true)}
          >
            Sign In
          </button>
          <Login
            show={loginModalShow}
            setUser={setUser}
            handleClose={() => setLoginModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
