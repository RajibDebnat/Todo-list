import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProject";
import SideBar from "./Components/Sidbar";
import { useState } from "react";
import SelectProject from "./Components/SelectProject";
function App() {
  const [isCreateProject, setCreateProject] = useState({
    clicked: false,
    projects: [],
  });
  function handleSelectProject(id) {
    setCreateProject((prevData) => {
      return {
        ...prevData,
        clicked: id,
      };
    });
  }
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
        clicked: false,

        projects: [...prevValue.projects, inputValue],
      };
    });
  }

  function addCancleHandler() {
    setCreateProject((prevData) => {
      return {
        ...prevData,
        clicked: false,
      };
    });
  }
  const selectedProject = isCreateProject.projects.find(
    (project) => project.id === isCreateProject.clicked
  );
  let id = selectedProject?.id;
  // console.log(selectedProject)
  let content = <SelectProject  onDelete={handleDelete} project={selectedProject} />;
  if (isCreateProject.clicked === true) {
    content = (
      <NewProject
        projectHandler={handleAddProject}
        cancleHandler={addCancleHandler}
      />
    );
  } else if (isCreateProject.clicked === false) {
    content = <NoProjectSelected isClicked={handleCreateProject} />;
  }

  function handleDelete() {
    setCreateProject((prevValue) => {
      const result = prevValue.projects.filter(project=> project.id !== project.clicked);
      console.log(result)
      return {
        ...prevValue,
        clicked: false,

        projects: prevValue.projects.filter(
          (project) => project.id !== prevValue.clicked
        ),


        
      };
    });
  
  }

  // console.log(selectedProject.id)
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={isCreateProject.projects}
        isClicked={handleCreateProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={id}
       
      />
      {content}
    </main>
  );
}

export default App;
