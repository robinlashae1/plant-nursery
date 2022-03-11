import {React,useState} from "react";
import { Button } from "react-bootstrap";

function AddPlant({user,plantsTypesData,setUsersPlants,usersPlants}) {

    const [newName,setNewName]= useState([])
    const [newType,setNewType]= useState([])
    const [ageMonths,setAgeMonths]= useState([])
    let ageDays = ageMonths * 30


      function handleSubmit(e){
          // e.preventDefault();
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
            .then((r) => setUsersPlants(usersPlants.concat(r)))
        }

      return (
        <div id="addPlantForm">
            <label >Name</label><br/>
            <input type="text"  onChange={(e)=>{setNewName(e.target.value)}}/> <br/>
            <label >Plant Age</label><br/>
            <input placeholder="Months" type="text"  onChange={(e)=>{setAgeMonths(e.target.value)}}/><br/>
          <label >What type of Plant is this?</label><br/>
          <select  onChange={(e)=>{setNewType(e.target.value)}}><br/>
          <option></option>
            {plantsTypesData.map(type=>(
                <option key={type.id} value={type.id}>{type.name}</option>
            ))}
            </select>
            <br/> 
        <div>
          <Button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details" onClick={handleSubmit} >Submit</Button>
        </div>
      </div> 
      )
}

export default AddPlant;