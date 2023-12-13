import NewTask from "./NewTask";

export default function Task({ onAddTask, taskData, onDelete }) {
  console.log(taskData.task);
  return (
    <section>
      <h2 className="mt-8 mb-3 text-stone-700 font-bold text-2xl">Task</h2>
      {/* Conditionally show this para */}
      <NewTask onAdd={onAddTask} />
      {taskData.task.length === 0 ? (
        <p className="mb-4 text-stone-800">
          This project does not have any tasks yet!
        </p>
      ) : (
        <ul className="border border-stone-200 rounded-lg overflow-hidden flex  flex-col gap-3 ">
          {taskData.task.map((task) => (
            <li
              key={task.taskId}
              className="bg-stone-100 py-3 px-4  border-b-2 border-stone-600 flex justify-between"
            >
              {/* You can add additional styling here */}
              <p className="text-stone-800  font-semibold">{task.text}</p>
              <button
                onClick={() => onDelete(task.id)}
                className=" px-2 py-1 rounded-md font-bold  text-stone-700 hover:bg-stone-600 hover:text-stone-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
