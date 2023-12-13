import Task from "./Task";

export default function SelectProject({ project ,onDelete,onAddTask,taskData,onDeleteTask}) {
    const formatedDate = new Date(project.dueDate).toLocaleDateString('en-Us', {
        year:"numeric",
        month:'short',
        day:'numeric'
    })
    // console.log(formatedDate)

  //   const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
  //     year: "numeric",
  //     month: 'short',
  //     day: 'numeric'
  // });
  // console.log(formattedDate);


  return (
    <div className="p-4 border border-gray-300 rounded-md w-2/4  bg-violet-100">
    <header className="flex justify-between items-center mb-4">
      <div className="flex items-cente space-x-12">
        <h2 className="text-xl font-bold mr-2">{project.title}</h2>
        <p>
          <button onClick={()=>onDelete()}  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md transition duration-300 ease-in-out">
            Delete
          </button>
        </p>
      </div>
      <p className="text-gray-500">{formatedDate}</p>
    </header>
    <p className=" whitespace-pre-wrap text-lg ">{project.description}</p>
    <Task onDelete={onDeleteTask} taskData={taskData} onAddTask={onAddTask} />
  </div>
  );  
}
