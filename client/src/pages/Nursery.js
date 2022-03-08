import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";
import AddPlant from '../Forms/AddPlant.js';
import {React, useState, useEffect} from "react";
import PlantCard from "./PlantCard";
import Collapsible from 'react-collapsible'


function Nursery({plantsTypesData,user,setUser}) {

    const [plantModalShow, setPlantModalShow] = useState(false);
    // console.log(user)
    console.log(plantsTypesData)
    
    function renderUsersPlants(user){
            if (user.plants){
                return(
                    user.plants.map(plant=>{
                        return(
                            <PlantCard key={plant.id} plantsTypesData={plantsTypesData} className={"nurseryPlant"} plant={plant}/>
                        )
                        }     
                    ))
            }else { 
                return(
                <p><b>No Plants here, Lets Add Some.</b></p>
                )
            }
        }
    return (
        user?
        <div className="nurseryPage">
        <HomeBanner />
        <p>My Plants</p>
        <Collapsible trigger="Add Plant" id="collapseForm">
            <AddPlant  user={user} plantsTypesData={plantsTypesData}/>
        </Collapsible>
        {renderUsersPlants(user)}
        <BottomBorder />
        </div> : <></>
     );
}

export default Nursery;