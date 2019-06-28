import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class AccountCreationForm extends Component {
    state = {
        accountCreation: {
            name: '',
            email: '',
            password: ''
        }
    };

    handleChange = (e) => {
        this.setState({
            accountCreation: {
                name: e.target.id === 'name' ? e.target.value : this.state.accountCreation.name,
                email: e.target.id === 'email' ? e.target.value : this.state.accountCreation.email,
                password: e.target.id === 'password' ? e.target.value : this.state.accountCreation.password
            }
        })

    }


    // TODOS redirect to Welcome page

    render() {
        return (

            <Paper >
                <Box p={3} >
                    <form onSubmit={(e) => this.props.handlePostRequest(e, "/users", this.state.accountCreation)}>
                        <TextField
                            id="name"
                            label="Name"
                            value={this.state.accountCreation.name}
                            onChange={this.handleChange}
                            margin="dense"
                            fullWidth
                            variant="outlined" />
                        <TextField
                            id="email"
                            label="Email"
                            value={this.state.accountCreation.email}
                            onChange={this.handleChange}
                            margin="dense"
                            fullWidth
                            variant="outlined" />
                        <TextField
                            id="password"
                            label="Password"
                            value={this.state.accountCreation.password}
                            onChange={this.handleChange}
                            margin="dense"
                            fullWidth
                            variant="outlined" />
                        <div>
                            <Typography variant="caption">
                                Make sure password is at least 7 characters.
                            </Typography>

                        </div>
                        <Box py={2} align="center">
                            <Button variant="contained" type="submit" color="secondary" size="large" style={{width:"100%"}}>
                                Sign up to Mitodo
                        </Button>
                        </Box>

                    </form>


                </Box>

            </Paper>



        )
    }
}

export default AccountCreationForm;