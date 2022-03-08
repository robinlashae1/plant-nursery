import {React,useState} from "react";
import { Modal, Button } from "react-bootstrap";

function AddPlant({show,handleClose}) {

    const [newName,setNewName]= useState([])
    const [email,setEmail]= useState([])
    const [newUsername,setUsername]= useState([])
    const [newPassword,setNewPassword]= useState([])
    const [newPasswordConfirmation,setNewPasswordConfirmation]= useState([])
    const [selectedFile, setSelectedFile]= useState(null)
  

      function handleSubmit(e){
          e.preventDefault();
          const formData = new FormData()
        formData.append('name', newName)
        formData.append('email', email)
        formData.append('username', newUsername)
        formData.append('password', newPassword)
        formData.append('password_confirmation', newPasswordConfirmation)
        formData.append('profile_picture', selectedFile)
          fetch(`/users`, {
            method: "POST",
            body: formData
          })
            .then((r) => r.json())
            .then((data) => console.log(data)) 
        }

      return (
        <Modal show={show} onHide={handleClose} className="modal">
          <Modal.Header className="modalHeader">
          <Modal.Title id="contained-modal-title-vcenter">
              Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
        <form onSubmit={console.log("submitted")} className="modal-details" className="modal-content" className="modalBody">
            <label for="name">Name</label>
            <input type="text"  onChange={(e)=>{setNewName(e.target.value)}}/> <br/>
            <label for="Description">Email</label>
            <input type="text"  onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label for="name">Username</label>
            <input type="text"  onChange={(e)=>{setUsername(e.target.value)}}/> <br/>
            <label for="Description">Password</label>
            <input type="text"  onChange={(e)=>{setNewPassword(e.target.value)}}/><br/>
            <label for="Description">Password Confirmation</label>
            <input type="text"  onChange={(e)=>{setNewPasswordConfirmation(e.target.value)}}/><br/>
            <label for="image">Profile Picture</label>
            <input type="file"  onChange={(e)=>{setSelectedFile(e.target.files[0])}}/>
          </form> 
          
        </Modal.Body>
         <Modal.Footer className="modalFooter">
        <Button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details" onClick={handleSubmit} >Submit</Button>
        <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
        </Modal.Footer>
      </Modal>
      )
}

export default AddPlant;