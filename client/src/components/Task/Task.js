import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';



import styles from './Task.module.css'

const Task = (props) => {

    const [task, setTask] = useState({
        description: props.task.description,
        id: props.task._id,
        disableChange: true
    });

    const handleChange = (e) => {
        setTask({
            ...task,
            description: e.target.value
        })
    }

    const enableChangeHandler = () => {
        setTask({
            ...task,
            disableChange: false
        })
    }

    const disableChangeHandler = () => {
        setTask({
            ...task,
            disableChange: true
        })
    }

    return (

        <Card className={styles.card_container} id={props.task._id} style={{ margin: "15px 0" }} >
            <CardContent style={{ display:"flex", flexFlow:"column", justifyContent:"space-between", height:"100%", boxSizing:"border-box"}} >

                <InputBase multiline style={{color:"inherit", width: "100%"}} disabled={task.disableChange} value={task.description} onChange={handleChange}></InputBase>
                <CardActions>
                    {
                        task.disableChange ?
                            <div style={{marginLeft:"auto"}}>
                                <Button size="small" aria-label="Modify task" onClick={enableChangeHandler}>
                                    Modify
                            </Button>

                                <Button size="small" color="secondary" aria-label="Delete task" onClick={(e) => {
                                
                                    props.handleDeleteTask(e, task.id)
                                    disableChangeHandler()
                                }}>
                                    Delete
                            </Button>
                            </div>
                            :
                            <Button style={{marginLeft:"auto"}} size="small" aria-label="Save task" onClick={(e) => {
                                const data = { _id: task.id, description: task.description }
                                
                                props.handleModifyTask(e, data)
                                disableChangeHandler()
                            }}>
                                Save
                        </Button>
                    }
                </CardActions>


            </CardContent>
        </Card>


    )

}



export default Task