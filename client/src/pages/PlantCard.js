
function PlantCard({plant,className,plantsTypesData,handleModalOpen}) {
    
    console.log(plant)
    function handleDelete(id){
        fetch(`/plants/${id}`,{
           method: "DELETE"}).then((r) => {
               if (r.ok){ console.log("deleted")}
           } )}

    if (className === "OtherPlant"){

        const des = plant.description
        const count = 190
        const results = des.slice(0, count)
         return (
             plant?
            <div className="PlantDiv other" onClick={() =>handleModalOpen(plant)} >
                <img id="otherPlantImg" src={plant.image} alt={plant.name}/>
                <h2 id="otherPlantName">{plant.name}</h2>
                <p id="otherPlantDescription">{results}...</p>
            </div>:<></>
     ); 
    }   else if (className === "nurseryPlant"){

        function renderPlantAge(plant){
            const plantMonths = plant.age / 30
            const plantsAge = Math.round(plantMonths)
            const plantsAgeYears = plant.age * .002738

            if (plantMonths > 12){return(<p id="nurseryPlantAge"><i>{Math.round(plantsAgeYears * 10)/10} Years Old</i></p>)
            } else { return( <p id="nurseryPlantAge"><i>{plantsAge} Months Old</i></p>)}}

            const PlantTypes= plantsTypesData.filter(plantType=>(
            plantType.id === plant.plant_type_id))
            console.log(PlantTypes)

        return(
            plant?
            <div className="nursery PlantDiv">
                <button id="removePlantButton" onClick={()=> handleDelete(plant.id)}>Remove</button>
             <img id="nurseryPlantImg" src={PlantTypes[0].nursery_picture.url} alt={plant.name}/>
             <div id="plantDescriptionSpace">
                 <div id="plantNameAge">
                  <h2 id="nurseryPlantName">{plant.name}</h2>
                    {renderPlantAge(plant)}  
                </div>
                <div id="nurseryPlantType">
                <p style={{marginRight: '30%', marginLeft: '10px'}}>Plant Type:</p><i>{PlantTypes[0].name}</i>  
                </div>
                <div id="updateButtons">
                    <p style={{marginRight: '30%', marginLeft: '10px'}}><b>Updates:</b></p>
                <button style={{marginRight: '10px'}}>Add</button>
                <button>View All</button>
                </div>
             </div> 
            </div>:<></>   
            )
        }
    
    }

export default PlantCard;