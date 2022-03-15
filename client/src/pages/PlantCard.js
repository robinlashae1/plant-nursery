function PlantCard({plant,className,plantsTypesData,handleModalOpen,handleNurseryModalOpen,handleDeleteRerender,setPlantModalData,setPlantUpdateModalShow}) {
  
    function handleDelete(id) {
    fetch(`/plants/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        r.json().then((deletedPlant) => handleDeleteRerender(deletedPlant));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  if (className === "OtherPlant") {
    const des = plant.description;
    const count = 150;
    const results = des.slice(0, count);
    return plant ? (
      <div className="PlantDiv other" onClick={() => handleModalOpen(plant)}>
        <img id="otherPlantImg" src={plant.image} alt={plant.name} />
        <h2 id="otherPlantName">{plant.name}</h2>
        <p id="otherPlantDescription">{results}...</p>
      </div>
    ) : (
      <></>
    );
  } else if (className === "nurseryPlant") {
    function renderPlantAge(plant) {
      const plantMonths = plant.age / 30;
      const plantsAge = Math.round(plantMonths);
      const plantsAgeYears = plant.age * 0.002738;

      if (plantMonths > 11) {
        return (
          <p id="nurseryPlantAge">
            <i>{Math.round(plantsAgeYears * 10) / 10} Years Old</i>
          </p>
        );
      } else {
        return (
          <p id="nurseryPlantAge">
            <i>{plantsAge} Months Old</i>
          </p>
        );
      }
    }

    const PlantTypes = plantsTypesData.filter(
      (plantType) => plantType.id === plant.plant_type_id
    );

    return PlantTypes[0] ? (
      <div className="nursery PlantDiv">
        <div id="buttondDiv">
          <button id="removePlantButton" onClick={() => handleDelete(plant.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={activeStyles}
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </button>
          <button
            className="removePlantButton updateButton"
            onClick={() => {
              setPlantUpdateModalShow(true);
              setPlantModalData(plant);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={activeStyles}
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </button>
        </div>
        <img
          id="nurseryPlantImg"
          src={PlantTypes[0].nursery_picture.url}
          alt={plant.name}
        />
        <div id="plantDescriptionSpace">
          <div id="plantNameAge">
            <h2 id="nurseryPlantName">{plant.name}</h2>
            {renderPlantAge(plant)}
          </div>
          <div id="nurseryPlantType">
            <p
              style={{
                marginRight: "3%",
                marginLeft: "10px",
                marginTop: "auto",
                fontSize: "12px",
              }}
            >
              Plant Type:
            </p>
            <i style={{ fontSize: "13px", right: "0",float: 'right' }}>
              {PlantTypes[0].nickname}
            </i>
          </div>
          <div id="updateButtons">
            <p
              style={{
                marginRight: "20%",
                marginLeft: "10px",
                marginTop: "auto",
              }}
            >
              <b>Updates:</b>
            </p>
            <button onClick={() => handleNurseryModalOpen(plant)}>
              View All
            </button>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  }
}

export default PlantCard;
const activeStyles = {
  height: "20px",
  weight: "20px",
  color: "rgb(32, 100, 32)",
};
