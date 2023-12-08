export default function NewTask(){
    return <div className=" mb-4">
        <input type="text" className=" w-64 px-2 py-1 rounded-sm  bg-stone-200"/>
        <button className=" text-stone-700rounded-sm  p-1 ml-3 hover:bg-stone-500 hover:text-stone-200 focus:outline-none hover:rounded-sm  transition-colors">Add Task</button>
    </div>
}