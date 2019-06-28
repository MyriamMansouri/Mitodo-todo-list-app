import React from 'react';
import Task from './Task/Task'
import Box from '@material-ui/core/Box';



const Tasks = (props) => (
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
            {props.tasks === [] ? null : props.tasks.map(task => {
                return (
                    <Task 
                    key={task._id} 
                    task={task}  
                    handleSelectTask={props.handleSelectTask}
                    handleDeleteTask={props.handleDeleteTask}
                    handleModifyTask={props.handleModifyTask}/>
                )
            })}
        </Box>
)

export default Tasks;
