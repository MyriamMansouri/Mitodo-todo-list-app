import React from 'react'
import AccountCreationForm from "../components/AccountCreationForm";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const SignupPage = (props) => (
    <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}>
        <Grid item sm={6} xs={12}>
            <Typography variant="h2" component="p" display="block" gutterBottom> 
                Your to-do list app
            </Typography>
            <Typography component="p">
               Sign up and start adding new tasks to your to do list. This app was created with React, Material UI, NodeJS, Express, MongoDB.
            </Typography>
            

        </Grid>
        <Grid item sm={5} xs={12}>
            <AccountCreationForm handlePostRequest={props.handlePostRequest} />
        </Grid>

    </Grid>
)

export default SignupPage