import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function UpdatePlant({handleClose,show,plant,user,plantsTypesData,setUsersPlants,usersPlants,}) {

  const [newName, setNewName] = useState([]);
  const [newType, setNewType] = useState([]);
  const [ageMonths, setAgeMonths] = useState([]);
  let ageDays = ageMonths * 30;


  function handleSubmit(id) {
    fetch(`/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        name: newName,
        plant_type_id: newType,
        age: ageDays,
      }),
    })
      .then((r) => r.json())
      .then((r) => setUsersPlants(usersPlants.concat(r)))
      .then(handleClose);
  }

  return plant ? (
    <Modal show={show} onHide={handleClose} id="plantModal">
      <Modal.Header>
        <Modal.Title>
          <b id="plantModalTitle">{plant.name}</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="addPlantForm">
          <label>Update Name?</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />{" "}
          <br />
          <label>Update Plant Age?</label>
          <br />
          <input
            placeholder="Months"
            type="text"
            onChange={(e) => {
              setAgeMonths(e.target.value);
            }}
          />
          <br />
          <label>Updated Plant Type?</label>
          <br />
          <select
            onChange={(e) => {
              setNewType(e.target.value);
            }}
          >
            <br />
            <option></option>
            {plantsTypesData.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          <br />
        </form>
      </Modal.Body>
      <Modal.Footer id="plantModalFooter">
        <Button
          type="submit"
          data-dismiss="modal"
          className="button"
          id="modalSubmit"
          form="modal-details"
          onClick={() => handleSubmit(plant.id)}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <div />
  );
}

export default UpdatePlant;
