import { Button, Modal } from "react-bootstrap";

function PlantModal({plant,show,handleClose}) {
    
    return ( 
        plant?
    <Modal show={show} onHide={handleClose} id="plantModal">
        <Modal.Header>
            <Modal.Title >
                <b id="plantModalTitle">{plant.name}</b>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body id="plantModalBody">
            <img id="plantModalImage" src={plant.image} alt={plant.name}/>
            <div>
              {plant.description}  
            </div>
        </Modal.Body>
        <Modal.Footer id="plantModalFooter">
            <button onClick={handleClose}> Close</button>
        </Modal.Footer>
    </Modal> : <></>
     );
}

export default PlantModal;