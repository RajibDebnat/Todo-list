import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProject";
import SideBar from "./Components/Sidbar";
import { useState } from "react";
function App() {
  const [isCreateProject, setCreateProject] = useState({
    clicked: false,
    projects: [],
  });
  function handleCreateProject() {
    setCreateProject((prevData) => {
      return {
        ...prevData,
        clicked: true,
      };
    });
  }
  function handleAddProject(inputedValue) {
    const inputValue = {
      ...inputedValue,
      id: Math.random(),
    };
    setCreateProject((prevValue) => {
      return {
        ...prevValue,
        clicked:false,
        
        projects: [...prevValue.projects, inputValue],
      };
    });


  }

  function addCancleHandler(){
    setCreateProject((prevData) => {
      return {
        ...prevData,
        clicked: false
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={isCreateProject.projects} isClicked={handleCreateProject} />
      {isCreateProject.clicked ? (
        <NewProject projectHandler={handleAddProject} cancleHandler={addCancleHandler} />
      ) : (
        <NoProjectSelected isClicked={handleCreateProject} />
      )}
    </main> 
  );
}

export default App;
