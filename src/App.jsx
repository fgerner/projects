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

    if (projectsState.selectedProjectId === null) {
        content = <NewProject/>
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
