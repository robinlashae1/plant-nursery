import {React,useState} from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function Login({show,handleClose,user,setUser,setUsersPlantsFunction}) {
  const [username,setUsername]= useState([])
  const [password,setPassword]= useState([])
  let history = useHistory();
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password }),
      })
        .then((r) => {
          if (r.ok){
            r.json().then((user) => setUser(user)).then(history.push("/"));
    } else {
      r.json().then((err) => console.log(err));
    }
  });}
    
    return(
      <Modal show={show} onHide={handleClose} >
        <Modal.Header className="modalHeader">
        <Modal.Title className="modalLogins" id="contained-modal-title-vcenter">
        🌱 Welcome Back 🌱
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
      <form onSubmit={handleSubmit} className="modal-details modalBody">
          <input type="text" className="modalFormInput" placeHolder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>
          <input type="password" className="modalFormInput" placeHolder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </form> 
      </Modal.Body>
       <Modal.Footer className="modalFooter">
      <Button type="submit" data-dismiss="modal" className="button loginButton" id="modalSubmit" form="modal-details" onClick={handleSubmit} >Submit</Button>
      </Modal.Footer>
    </Modal>
    )  
  }
  export default Login

