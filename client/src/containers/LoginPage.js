import React from 'react'
import LoginForm from "../components/LoginForm";
import Container from '@material-ui/core/Container'


const LoginPage = (props) => {
    return (
        <Container maxWidth="xs">
            <LoginForm handlePostRequest={props.handlePostRequest} />
        </Container>
    )
}
    
export default LoginPage