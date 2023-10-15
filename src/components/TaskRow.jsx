import React from "react";

function TaskRow({one,toggleTask}) {



    function handleChange(){

        toggleTask(one.name)
    }

  return (
    <tr key={one.name}>
      <td>{one.name}
      
        <input type="checkbox" checked={one.done} onChange={handleChange}/>
      </td>
    </tr>
  );
}

export default TaskRow;
