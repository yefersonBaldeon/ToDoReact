import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ taskList, toggleTask, showContent =false}) {
  function taskTableRows() {
    return taskList
    
    .filter(one=>one.done===showContent)
    .map((one) => {
      return (
        <TaskRow toggleTask={toggleTask} key={one.name} one={one}></TaskRow>
      );
    });
  }

  return (
    <div>
      <table className="table table-dark table-striped table-bordered border-primary">
        <thead>
          <tr>
            <th className="table-primary">Taks</th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}

export default TaskTable;
