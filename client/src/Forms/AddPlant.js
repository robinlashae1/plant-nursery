import {React,useState} from "react";
import { Button } from "react-bootstrap";

function AddPlant({user,plantsTypesData,handleClose}) {

    const [newName,setNewName]= useState([])
    const [newType,setNewType]= useState([])
    const [ageMonths,setAgeMonths]= useState([])
    let ageDays = ageMonths * 30
    console.log("ageMoths:", ageMonths)
  console.log("ageDays:",ageDays)
  console.log(user)

      function handleSubmit(e){
          e.preventDefault();
          fetch(`/plants`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: user.id, 
              name: newName,
              plant_type_id: newType,
              age: ageDays
            }),
          })
            .then((r) => r.json())
            .then((data) => console.log(data)) 
        }

      return (
        <div>
            <label >Name</label>
            <input type="text"  onChange={(e)=>{setNewName(e.target.value)}}/> <br/>
            <label >How Many Months Old is your Plant</label>
            <input type="text"  onChange={(e)=>{setAgeMonths(e.target.value)}}/><br/>
          <label >What type of Plant is this?</label>
          <select  onChange={(e)=>{setNewType(e.target.value)}}><br/>
          <option></option>
            {plantsTypesData.map(type=>(
                <option key={type.id} value={type.id}>{type.name}</option>
            ))}
            </select>
            <br/> 
        <div>
          <Button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details" onClick={handleSubmit} >Submit</Button>
        <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
        </div>
      </div> 
      )
}

export default AddPlant;