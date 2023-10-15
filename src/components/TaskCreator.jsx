import React, { useState } from "react";

function TaskCreator({ two }) {
  const [Task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Task);
    setTask("");
    localStorage.setItem("task", Task);

    two(Task);
  };

  return (
    <div>
      <form  className="row my-4" action="" onSubmit={handleSubmit}>
        <div className="col-9">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            value={Task}
          />
        </div>

        <div className="col-3">

        <button className="btn btn-primary">send task</button>

        </div>
      </form>
    </div>
  );
}

export default TaskCreator;
