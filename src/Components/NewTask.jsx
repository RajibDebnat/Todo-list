  import { useState } from "react";
  export default function NewTask({ onAdd }) {
    const [addTask, setTask] = useState();
    function inputOnChange(input) {
      setTask(input.target.value);
      // console.log(addTask);
    }
    function handleInput() {
      onAdd(addTask);
      setTask("");
    }

    return (
      <div className=" mb-4">
        <input
          onChange={inputOnChange}
          type="text"
          className=" w-64 px-2 py-1 rounded-sm bg-orange-400 "
          value={addTask}
        />
        <button
          onClick={handleInput}
          className=" text-stone-700rounded-sm  p-1 ml-3 hover:bg-stone-500 hover:text-stone-200 focus:outline-none hover:rounded-sm  transition-colors"
        >
          Add Task
        </button>
      </div>
    );
  }
