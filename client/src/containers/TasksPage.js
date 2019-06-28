import React from 'react'
import Tasks from "../components/Tasks";
import TaskCreationForm from "../components/TaskCreationForm";
import Container from "@material-ui/core/Container"

const TasksPage = (props) => (
    <Container>
        <TaskCreationForm handlePostRequest={props.handlePostRequest} />
        <Tasks
            tasks={props.tasks}
            handleSelectTask={props.handleSelectTask} 
            handleDeleteTask={props.handleDeleteTask}
            handleModifyTask={props.handleModifyTask}/>
    </Container>
)

export default TasksPage