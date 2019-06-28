import React from 'react';
import Link from '@material-ui/core/Link'


const DeleteUserForm = (props) => {
    console.log(props.history)
    return(
        <Link
        variant="body1"
        component="button"
        underline="none"
        color="secondary"
        onClick={(e) => {
            props.handleDeleteUser(e)
            
        }} >
             
        Delete account
    </Link>
    )
}



export default DeleteUserForm;