import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleValue(e) {
    setData(e.target.value);
  }

  function handleClick() {
    if (data.trim() !== "") {
      setTasks([...tasks, data]);
      setData("");
    }
  }

  function handleDelete(index) {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <input
          type="text"
          value={data}
          placeholder="Create a task"
          onChange={handleValue}
          className="input-element"
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>

      <ul className="task">
        {tasks.map((task, index) => (
          <li key={index} className="items">
            {task}
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
