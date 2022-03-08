import {React,useState} from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function Login({show,handleClose,user,setUser}) {
  const [username,setUsername]= useState([])
  const [password,setPassword]= useState([])
  const [errors, setErrors] = useState([]);
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
      r.json().then((err) => setErrors(err.errors));
    }
  });}
    console.log(errors)
    
    return(
      <Modal show={show} onHide={handleClose} >
        <Modal.Header className="modalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
            Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
      <form onSubmit={handleSubmit} className="modal-details" className="modal-content" className="modalBody">
          <label >Username</label>
          <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>
          <label>Password</label>
          <input type="text"  value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        </form> 
      </Modal.Body>
       <Modal.Footer className="modalFooter">
      <Button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details" onClick={handleSubmit} >Submit</Button>
      <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
      </Modal.Footer>
    </Modal>
    )  
  }
  export default Login

