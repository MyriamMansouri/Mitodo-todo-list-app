import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

class TaskCreationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: {
                description: ''
            }
        }
    }

    handleSubmit = (e) => {
        this.setState({
            task: {
                description: e.target.id === 'description' ? e.target.value : this.state.task.description
            }
        })
    }
    render() {
        return (

            <form onSubmit={(e) => this.props.handlePostRequest(e, "/tasks", this.state.task)}>
                <Box py={5} display="flex" flexDirection="row" alignItems="center" justifyContent="center" >
                    <TextField
                        id="description"
                        label="Create new task"
                        value={this.state.task.description}
                        onChange={this.handleSubmit}
                        style={{width:"60%", marginRight:20}}
                    />

                    <Button variant="contained" type="submit" color="primary">
                        Submit
                    </Button>
                </Box>
            </form>

        )
    }
}


export default TaskCreationForm;