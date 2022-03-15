import HomeBanner from "../bars/HomeBanner";
import PlantCard from "./PlantCard";
import { useState } from "react";
import PlantModal from "../Forms/PlantModal";

function OtherPlants({ plants, user, handleLogoutClick }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  
  function renderPlants(plants) {
    const alphabeticalFiltered = plants.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    
    return alphabeticalFiltered.map((plant) => {
      return (
        <PlantCard
          key={plant.id}
          handleModalOpen={handleModalOpen}
          className={"OtherPlant"}
          plant={plant}
        />
      );
    });
  }

  function handleModalOpen(plant) {
    setModalOpen(true);
    setModalData(plant);
  }

  return (
    <div className="aboutPage">
      <HomeBanner handleLogoutClick={handleLogoutClick} user={user} />
      <div
        id="otherPlantsLanding"
        style={{ marginTop: "25px", paddingLeft: "10px", paddingRight: "10px" }}
      >
        <div id="otherPlantsRenderDiv">
          {renderPlants(plants)}
          <PlantModal
            plant={modalData}
            show={modalOpen}
            handleClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default OtherPlants;
