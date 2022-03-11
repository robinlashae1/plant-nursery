import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";
import AddPlant from '../Forms/AddPlant.js';
import UpdatesModal from "../Forms/UpdatesModal";
import AddComment from '../Forms/AddComment.js';
import {React, useState} from "react";
import PlantCard from "./PlantCard";
import Collapsible from 'react-collapsible'
import Rescue from './Rescue'


function Nursery({plantsTypesData,user,setUser,handleLogoutClick,loginModalShow,setLoginModalShow,setUsersPlants,usersPlants}) {

    const [updatesModalShow, setUpdatesModalShow] = useState(false);
    const [plantModalData, setPlantModalData]=useState([])
    // console.log(user)
    console.log(usersPlants)

    function handleDeleteRerender(item){
        const arr = usersPlants.filter((item) => item.name !== item);
        console.log(arr);
    };
    
    function renderUsersPlants(user){
            if (user.plants.length > 0){
                setUsersPlants(user.plants)
                return(
                    usersPlants.map(plant=>{
                        return(
                            <PlantCard handleDeleteRerender={handleDeleteRerender} handleNurseryModalOpen={handleNurseryModalOpen} key={plant.id} plantsTypesData={plantsTypesData} className={"nurseryPlant"} plant={plant}/>
                        )
                        }     
                    ))
            }else { 
                return(
                <p><b>No Plants here, Lets Add Some.</b></p>
                )
            }
        }
        function handleNurseryModalOpen(plant){
            setUpdatesModalShow(true);
            setPlantModalData(plant)
        }
    
    return (
        user?
        <div className="nurseryPage">
        <HomeBanner handleLogoutClick={handleLogoutClick} user={user}/>
        <h1>My Plants</h1>
        
        
        <div id="nurseryPlantSpace">
           {renderUsersPlants(user)}
        </div>
        <UpdatesModal usersUpdates={user.updates} plant={plantModalData} show={updatesModalShow} handleClose={()=> setUpdatesModalShow(false)}/>
        <div id="collapseSpace">
          <Collapsible trigger="Add Plant" id="collapseForm">
            <AddPlant  setUsersPlants={setUsersPlants} usersPlants={usersPlants} user={user} plantsTypesData={plantsTypesData}/>
        </Collapsible>
        <Collapsible trigger="Add Update" id="collapseForm">
            <AddComment  user={user} />
        </Collapsible> 
        </div>
        <BottomBorder />
        </div> : <Rescue setLoginModalShow={setLoginModalShow} loginModalShow={loginModalShow} user={user} setUser={setUser} user={user}/>
     );
}

export default Nursery;