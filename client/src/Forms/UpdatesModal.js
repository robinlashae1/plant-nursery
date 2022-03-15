import { Button, Modal } from "react-bootstrap";
import format from "date-fns/format";

function UpdatesModal({ plant, show, handleClose}) {

  function renderUpdates(plant) {
    return plant.updates.map((update) => {
      const date = plant.created_at;
      const formattedDate = format(new Date(date), "dd / MMMM / yyyy");

      return (
        <div id="updateDiv" key={update.id}>
          <div>
            <p>{update.comment}</p>
          </div>

          <div id="updateStatusDate">
            <p
              style={{
                marginTop: "auto",
                fontSize: "15px",
                left: "0",
                marginLeft: "15px",
                marginRight: "50%",
                marginBottom: "1%",
              }}
            >
              <b>Status:</b> {update.status}
            </p>
            <p
              style={{
                marginTop: "auto",
                fontSize: "15px",
                marginBottom: "1%",
                marginTop: "1%",
              }}
            >
              <b>Date:</b> {formattedDate}
            </p>
          </div>
        </div>
      );
    });
  }

  return plant.updates ? (
    <Modal show={show} onHide={handleClose} id="plantModal">
      <Modal.Header>
        <Modal.Title>
          <b id="plantModalTitle">{plant.name}`s Updates</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderUpdates(plant)}</Modal.Body>
      <Modal.Footer id="plantModalFooter">
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <div />
  );
}

export default UpdatesModal;
