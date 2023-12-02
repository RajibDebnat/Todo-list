import Button from "./Button";
const skeliton =  <i  ><button className=" bg-stone-800 text-stone-400 px-4 py-4 rounded-lg w-full"></button></i>;

export default function SideBar({isClicked,projects}) {
  return (
    <aside className=" w-1/4 px-8 py-16 bg-stone-900 text-slate-50 md:w-73 rounded-r-2xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project  
      </h1>
      <div>
       <Button isClicked={isClicked}>+ Add Project</Button>
      </div>
      <ul typeof="circle" className="flex flex-col gap-4 mt-8">
     
     { projects.map((project)=>{
       return<i key={project.id} ><button className=" text-left bg-stone-800 text-stone-400 px-4 py-2 rounded-lg hover:bg-stone-600 w-full">{project.title}</button></i>
      })}
      </ul>
    </aside>
  );
}
