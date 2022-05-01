import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddPlant({ show, handleClose }) {
  const [newName, setNewName] = useState([]);
  const [email, setEmail] = useState([]);
  const [newUsername, setUsername] = useState([]);
  const [newPassword, setNewPassword] = useState([]);
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState([]);
  const [err, setErr]= useState([])

  function validateForm(){
    return (
    Object.entries(err).map( alert => {
      return <p id="alert">{alert[1][0]}</p>
    }))
  }

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
    .then((r) => {
      if (r.ok) {
          r.json()
          .then((data) => console.log("data", data))
          .then(handleClose);
        }
        else{
          r.json().then((r) => setErr(r));
        }
      });
  }
console.log(err)
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
            required
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <br />
          <input
            className="modalFormInput"
            placeHolder="Email"
            type="text"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="modalFormInput"
            placeHolder="UserName"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            className="modalFormInput"
            placeHolder="Password"
            required
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            className="modalFormInput"
            placeHolder="Password Confirmation"
            required
            onChange={(e) => {
              setNewPasswordConfirmation(e.target.value);
            }}
          />
          <br />
          <div>
            {validateForm()}
          </div>
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
