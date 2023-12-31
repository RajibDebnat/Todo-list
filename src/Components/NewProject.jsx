import Input from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewProject({ projectHandler,cancleHandler }) {
  // const [storeInputValue, setInputValue] = useState({});
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const dialog= useRef()
  function handleInput() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

if(enteredTitle.trim()==="" || enteredDescription.trim()===""|| enteredDueDate.trim() ===""){
//show  the error modal f
dialog.current.Open();
// return for not exicute after the value of if statement false 
return;
}

    projectHandler({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <>
 <Modal ref={dialog} buttonCaption="Okay">
  <h2 className=" text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
  <p className=" text-stone-600 mb-4">Oops.... looks like you forgot to enter a value</p>
  <p className=" text-stone-600 mb-4">Please make sure you inputed valid value for every input field</p>
 </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={()=>cancleHandler()} className=" text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleInput}
            className=" bg-stone-800 text-stone-50 hover:bg-stone-950 box-border px-6 py-2 rounded-md cursor-pointer"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} type="text" label="Title" />
        <Input ref={description} textarea={true} label="Description" />
        <Input ref={dueDate} label="Due Date" type="date" />
        {/* <p>            <label>Description</label>
            <textarea/>
        </p>
        <p>
            <label>Due Date</label>
            <input type="number"/>
        </p> */}
      </div>
    
    </div>
    </>
  );
}
