import HomeBanner from "../bars/HomeBanner";
import AddPlant from "../Forms/AddPlant.js";
import UpdatesModal from "../Forms/UpdatesModal";
import AddComment from "../Forms/AddComment.js";
import { React, useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import Collapsible from "react-collapsible";
import UpdatePlant from "../Forms/UpdatePlant";
import Rescue from "./Rescue";

function Nursery({
  plantsTypesData,
  user,
  setUser,
  handleLogoutClick,
  loginModalShow,
  setLoginModalShow,
  setUsersPlants,
  usersPlants,
}) {
  const [updatesModalShow, setUpdatesModalShow] = useState(false);
  const [plantModalData, setPlantModalData] = useState([]);
  const [plantUpdateModalShow, setPlantUpdateModalShow] = useState(false);
  // // console.log(user)
console.log(plantsTypesData)

  function handleDeleteRerender(item) {
    const arr = usersPlants.filter((plant) => plant.id !== item);
    setUsersPlants(arr);
  }

  function renderUsersPlants(user) {
    if (user.plants.length > 0) {
      return usersPlants.map((plant) => {
        return (
          <PlantCard
            setUsersPlants={setUsersPlants}
            usersPlants={usersPlants}
            setPlantModalData={setPlantModalData}
            setPlantUpdateModalShow={setPlantUpdateModalShow}
            handleDeleteRerender={handleDeleteRerender}
            handleNurseryModalOpen={handleNurseryModalOpen}
            key={plant.id}
            plantsTypesData={plantsTypesData}
            className={"nurseryPlant"}
            plant={plant}
          />
        );
      });
    } else {
      return <p style={rescueStyle}>No Plants here, Lets Add Some.</p>;
    }
  }
  
  function handleNurseryModalOpen(plant) {
    setUpdatesModalShow(true);
    setPlantModalData(plant);
  }

  return (
    plantsTypesData?
    <div className="nurseryPage">
      <HomeBanner handleLogoutClick={handleLogoutClick} user={user} />

      <div id="nurseryPlantSpace">{renderUsersPlants(user)}</div>
      <UpdatePlant
        setUsersPlants={setUsersPlants}
        usersPlants={usersPlants}
        plantsTypesData={plantsTypesData}
        user={user}
        plant={plantModalData}
        show={plantUpdateModalShow}
        handleClose={() => setPlantUpdateModalShow(false)}
      />
      <UpdatesModal
        usersUpdates={user.updates}
        plant={plantModalData}
        show={updatesModalShow}
        handleClose={() => setUpdatesModalShow(false)}
      />
      <div id="collapseSpace">
        <Collapsible trigger="Add">
          <Collapsible trigger="-Plant-" id="collapseForm">
            <AddPlant
              setUsersPlants={setUsersPlants}
              usersPlants={usersPlants}
              user={user}
              plantsTypesData={plantsTypesData}
            />
          </Collapsible>
          <Collapsible trigger="-Update-" id="collapseForm">
            <AddComment user={user} />
          </Collapsible>
        </Collapsible>
      </div>
    </div> : <></>
  ) 
  ;
}

export default Nursery;
let rescueStyle = {
  textAlign: "center",
  fontSize: "30px",
  margin: "auto",
  marginLeft: "40%",
  marginTop: "10%",
  color: "",
};
