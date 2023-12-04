export default function SelectProject({ project }) {
    const formatedDate = new Date(project.dueDate).toLocaleDateString('en-Us',{
        year:"numeric",
        month:'short',
        day:'numeric'
    })
  return (
    <div className="p-4 border border-gray-300 rounded-md">
    <header className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-2">{project.title}</h2>
        <p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md transition duration-300 ease-in-out">
            Delete
          </button>
        </p>
      </div>
      <p className="text-gray-500">{formatedDate}</p>
    </header>
    <p>{project.description}</p>
  </div>
  );
}
