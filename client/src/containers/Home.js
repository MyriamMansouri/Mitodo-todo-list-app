
// client/src/App.js
import React from "react";
import TasksPage from "./TasksPage";
import SignupPage from "./SignupPage";

const Home = (props) => {

    if (props.loggedIn) {
        return (
            <TasksPage
                tasks={props.tasks}
                handlePostRequest={props.handlePostRequest}
                handleSelectTask={props.handleSelectTask} 
                handleDeleteTask={props.handleDeleteTask}
                handleModifyTask={props.handleModifyTask}/>
        )
    } else {
        return <SignupPage handlePostRequest={props.handlePostRequest} />
    }

}

export default Home;
