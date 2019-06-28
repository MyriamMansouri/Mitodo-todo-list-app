import React from 'react';
import Link from '@material-ui/core/Link'


const LogoutForm = (props) => (

    <Link
        variant="body1"
        component="button"
        underline="none"
        color="inherit"
        onClick={(e) => props.handlePostRequest(e, "/users/logout")} >
        Log out
    </Link>

)



export default LogoutForm;