import { Button, Modal } from "react-bootstrap";
function UpdatesModal({plant,show,handleClose,usersUpdates}) {

    function renderUpdates(plant){
        return(
          plant.updates.map(update=>{
            console.log(update)
            return(
                <div id="updateDiv">
                    <p>{update.comment}</p>
                    <div id="updateStatusDate">
                       <p style={{
                    marginTop: 'auto',fontSize: '15px', left: "0", marginLeft: "15px", marginRight: "50%"}}>Status: {update.status}</p>
                   <p style={{
                    marginTop: 'auto',fontSize: '15px'}}>Date: {plant.created_at}</p> 
                    </div>
                   
                </div>
            )
        })  
        )
    }
    
    
    // console.log(plant)
    return (
        plant.updates?
        <Modal show={show} onHide={handleClose} id="plantModal">
            <Modal.Header>
                <Modal.Title>
                    <b id="plantModalTitle">{plant.name}`s Updates</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {renderUpdates(plant)}
            </Modal.Body>
            <Modal.Footer id="plantModalFooter">
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>:
        <div/>
     );
}

export default UpdatesModal;
       