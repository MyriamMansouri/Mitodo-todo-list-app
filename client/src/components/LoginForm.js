import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: '',
                password: ''

            }
        }
    }

    handleChange = (e) => {

        this.setState({
            login: {
                email: e.target.id === 'email' ? e.target.value : this.state.login.email,
                password: e.target.id === 'password' ? e.target.value : this.state.login.password
            }
        })

    }

    render() {
        return (
            <Paper>
                <Box p={3} >
                    <Typography variant="h5" component="h1" gutterBottom>
                        Log in to Mitodo
                    </Typography>

                    <form onSubmit={(e) => this.props.handlePostRequest(e, "/users/login", this.state.login)}>
                        <TextField
                            id="email"
                            label="Email"
                            value={this.state.login.name}
                            onChange={this.handleChange}
                            margin="dense"
                            fullWidth
                            variant="outlined" />
                        <TextField
                            id="password"
                            label="Password"
                            value={this.state.login.name}
                            onChange={this.handleChange}
                            margin="dense"
                            fullWidth
                            variant="outlined" />
                        <Box py={2}>
                            <Button color="secondary" variant="contained" type="submit">
                                Log in
                    </Button>
                        </Box>

                    </form>
                </Box>
            </Paper >
        )
    }

}

export default LoginForm;