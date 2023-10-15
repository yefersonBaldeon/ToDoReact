import React from "react";

function Visible({ setcontent, content, handleDelete }) {


  function DeleteHand(){

    if(window.confirm("Are you sure you want to delete all tasks?")){
      handleDelete()
    }
  }

  return (
    <div className="d-flex justify-content-between bg-secondary p-2">
      <div className="form-check form-switch">
        <input className="form-check-input"
          type="checkbox"
          checked={content}
          onChange={() => {
            setcontent(!content);
          }}
        />{" "}
        <label className="form-check-label" >Show Tasks</label>
      </div>

      <button  className="btn btn-danger" onClick={DeleteHand}>delete</button>
    </div>
  );
}

export default Visible;
