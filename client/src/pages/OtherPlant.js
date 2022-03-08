import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";
import PlantCard from "./PlantCard";
import {useState} from "react"
import PlantModal from "../Forms/PlantModal";

function OtherPlants({plants}) {
    const [modalOpen, setModalOpen]=useState(false)
    const [modalData, setModalData]=useState([])
    function renderPlants(plants){
        return(
         plants.map(plant => {
            return(
                <PlantCard handleModalOpen={handleModalOpen} className={"OtherPlant"} plant={plant}/>  
         )}
         
         )
        
        )
    }
    console.log(modalOpen)
    console.log(modalData)
    function handleModalOpen(plant){
        setModalOpen(true);
        setModalData(plant)
    }
    return ( 
        <div className="aboutPage">
        <HomeBanner />
        <div id="otherPlantsLanding">
          <p>Other Plants</p>
        <div id="otherPlantsRenderDiv">
        {renderPlants(plants)}
        <PlantModal plant={modalData} show={modalOpen} handleClose={()=> setModalOpen(false)}/>
        </div>
        </div>
        <BottomBorder/>
        </div>
     );
}

export default OtherPlants;