import { React, useState } from "react";
import { Button } from "react-bootstrap";

function AddComment({ user }) {
  const [status, setStatus] = useState([]);
  const [comment, setComment] = useState([]);
  const [plantId, setPlantId] = useState([]);
  const [updateErrors, setUpdateErrors] = useState([]);
  const statuses = [
    "Great",
    "Good",
    "Normal",
    "Dry",
    "Bad",
    "New Growth",
    "Watered",
  ];

  function reset() {
    setStatus("");
    setComment("");
    setPlantId("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/updates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        status: status,
        plant_id: plantId,
        comment: comment,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((update) => console.log("all Good:", update))
          .then(reset);
      } else {
        r.json().then((err) => setUpdateErrors(err.errors));
      }
    });
  }

  console.log(updateErrors)

  return user && user.plants ? (
    <div id="addPlantForm">
      <label>Plant</label>
      <br />
      <select
        value={plantId}
        onChange={(e) => {
          setPlantId(e.target.value);
        }}
      >
        <br />
        <option></option>
        {user.plants.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
      <br />
      <label>Status</label>
      <br />
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <br />
        <option></option>
        {statuses.map((type) => (
          <option key={type.id} value={type.id}>
            {type}
          </option>
        ))}
      </select>
      <br />
      <label>Comment</label>
      <br />
      <input
        value={comment}
        placeholder="Tell Us More"
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <div>
        <Button
          type="submit"
          data-dismiss="modal"
          className="button"
          id="modalSubmit"
          form="modal-details"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default AddComment;
