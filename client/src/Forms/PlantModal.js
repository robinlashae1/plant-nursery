import { Button, Modal } from "react-bootstrap";

function PlantModal({ plant, show, handleClose }) {
    
  return plant ? (
    <Modal show={show} onHide={handleClose} id="plantModal">
      <Modal.Header>
        <Modal.Title>
          <b id="plantModalTitle">{plant.name}</b> <hr />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="plantModalBody">
        <img id="plantModalImage" src={plant.image} alt={plant.name} />
        <div id="plantModalDescription">
          <p style={{ marginTop: "20px", padding: "auto" }}>
            {plant.description}{" "}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer id="plantModalFooter">
        <Button onClick={handleClose}> Close</Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <></>
  );
}

export default PlantModal;
