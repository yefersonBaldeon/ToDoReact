import React, { useEffect, useState } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import Visible from "./components/Visible";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [taskList, settaskList] = useState(() => {
    if (localStorage.getItem("taskList"))
      return JSON.parse(localStorage.getItem("taskList"));
    else return [];
  });

  const [content, setcontent] = useState(false);

  function taskSend(task) {
    if (!taskList.find((one) => one.name === task)) {
      settaskList([...taskList, { name: task, done: false }]);
    }
  }

  function toggleTask(taskName) {
    settaskList(
      taskList.map((one) =>
        one.name === taskName ? { ...one, done: !one.done } : one
      )
    );
  }

  function handleDelete() {
    settaskList(taskList.filter((one) => one.done === false));
    setcontent(false);
  }

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <main className="bg-dark text-light vh-100 p-2">
      <div className="container col-md-4">
        <TaskCreator two={taskSend}></TaskCreator>
        <TaskTable toggleTask={toggleTask} taskList={taskList}></TaskTable>

        <Visible
          content={content}
          setcontent={setcontent}
          handleDelete={handleDelete}
        ></Visible>

        {content && (
          <TaskTable
            toggleTask={toggleTask}
            showContent={true}
            taskList={taskList}
          ></TaskTable>
        )}
      </div>
    </main>
  );
}

export default App;
