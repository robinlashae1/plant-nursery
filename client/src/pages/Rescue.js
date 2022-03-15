import React from "react";
import Login from "../Forms/Login";
import HomeBanner from "../bars/HomeBanner";

function Rescue({ loginModalShow, setLoginModalShow, setUser, user }) {
  return (
    <>
      <HomeBanner user={user} />
      <div className="lander">
        <div className="NotFound text-center" id="nameSpace">
          <h3>Sorry, page not found!</h3>
          <p>
            Please Return <a href="/">Home</a>
          </p>
          <p>
            or
            <button
              style={{ marginLeft: "4px", marginRight: "4px" }}
              type="button"
              id="serviceCreateButton"
              className="button"
              onClick={() => setLoginModalShow(true)}
            >
              Sign In
            </button>
            to Continue
          </p>
          <Login
            show={loginModalShow}
            setUser={setUser}
            handleClose={() => setLoginModalShow(false)}
          />
        </div>
      </div>
    </>
  );
}
export default Rescue;
