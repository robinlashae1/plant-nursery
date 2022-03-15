import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddPlant({ show, handleClose }) {
  const [newName, setNewName] = useState([]);
  const [email, setEmail] = useState([]);
  const [newUsername, setUsername] = useState([]);
  const [newPassword, setNewPassword] = useState([]);
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newName);
    formData.append("email", email);
    formData.append("username", newUsername);
    formData.append("password", newPassword);
    formData.append("password_confirmation", newPasswordConfirmation);
    fetch(`/users`, {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .then((data) => console.log(data))
      .then(handleClose);
  }

  return (
    <Modal show={show} onHide={handleClose} className="modal">
      <Modal.Header className="modalHeader">
        <Modal.Title className="modalLogins" id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <form
          onSubmit={console.log("submitted")}
          className="modal-details modalBody"
        >
          <input
            className="modalFormInput"
            placeHolder="Name"
            type="text"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />{" "}
          <br />
          <input
            className="modalFormInput"
            placeHolder="Email"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="modalFormInput"
            placeHolder="UserName"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="password"
            className="modalFormInput"
            placeHolder="Password"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            className="modalFormInput"
            placeHolder="Password Confirmation"
            onChange={(e) => {
              setNewPasswordConfirmation(e.target.value);
            }}
          />
          <br />
        </form>
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button
          type="submit"
          data-dismiss="modal"
          className="button loginButton"
          id="modalSubmit"
          form="modal-details"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {/* <Button variant="secondary" onClick={handleClose} className="button loginButton" id="modalClose">Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default AddPlant;
