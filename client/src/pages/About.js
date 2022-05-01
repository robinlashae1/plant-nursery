import React from "react";
import HomeBanner from "../bars/HomeBanner";
import Aggy from "../public/Aggy.jpg";

function About({ user, handleLogoutClick }) {
    
  return (
    <div className="aboutPage">
      <HomeBanner handleLogoutClick={handleLogoutClick} user={user} />
      <div style={{ marginTop: "25px" }}>
        <h1 id="titleStyle">Where it Started...</h1>
        <div id="textSpace">
          <div className="aboutUs">
            <p>
              My plant collection started when my partner gifted me with our
              Staghorn fern, Agatha in January of 2020. I grew very fondly of
              our little fern and quickly realized I wanted to be a plant mom.
              From 2020 to 2021 my partner and I collected dozens of plants from
              Monsteras to snake plants.... we practically live in a jungle.
              While I love taking care of my plants, keeping track of them all
              can be very overwhelming at times. And just like that, Seed watch
              was born! Now every plant parent has the right tool to keep their
              plants{" "}
              <u style={{ textDecorationThickness: ".5px" }}>
                lively and happy
              </u>
              !
            </p>
          </div>
          <div>
            <img id="aboutImage" src={Aggy} alt="a small staghorn plant in a sunny window"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
