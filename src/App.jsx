import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import {useState} from "react";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    })
    let content;

    function handleStartAddProject() {
        setProjectsState(prevState => {
                return {
                    ...prevState,
                    selectedProjectId: null,
                }
            }
        )
    }

    function handleAddProject(projectData) {
        setProjectsState(prevState => {
            const newProject = {
                id: crypto.randomUUID(),
                ...projectData,
            }
            return {
                ...prevState,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    console.log(projectsState)

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject}/>
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }


    return (
        <main className="h-screen my-8 flex gap-8">
            <Sidebar onStartAddProject={handleStartAddProject}/>
            {content}
        </main>
    );
}

export default App;
