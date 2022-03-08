import React from "react";
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";

function About(){
    return(
    <div className="aboutPage">
        <HomeBanner title="ABOUT US"/>
        
        <div className="aboutUs">
            <p>Born out of the need for easy access to local beauty services<br/>
                tailored towards POC on a PWI campus, Campus Finder works to <br/>
                connect the students looking for specific beauty services with <br/>
                the students providing these services on campus. A perfect place <br/>
                for new entrepreneurs to grow the reach of their business, Campus <br/>
                Finder provides a localized hub for students to discover the essential<br/> 
                services offered within the comfort of their own community. From hair braiding<br/> 
                to nail techs, Campus Finder gives a list of the services available across the country.</p>
        </div>
        <BottomBorder/>
    </div>
    )
}
export default About