import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutForm from './LogoutForm';
import DeleteUserForm from './DeleteUserForm';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowRight';


const UserMenu = (props) => {

    if (!props.loggedIn) {
        return (
            <nav>
                <NavLink to={`/login`} style={{ paddingRight: 10 }}>
                    <Button color="inherit">
                        Log In
                    </Button>
                </NavLink>
                <NavLink to={`/`}>
                    <Button variant="outlined" color="inherit">
                        Sign up
                    </Button>
                </NavLink>
            </nav>
        )

    } else {
        return (
            <nav>
                <Button color="inherit" style={{ textTransform: "none" }} onClick={() => props.handleUserMenuOpen()}>
                    {"Hello " + props.user.name}
                    <ArrowDropDownIcon />
                </Button>

                <Drawer
                    anchor='right'
                    open={props.userMenuOpen}
                    onClose={() => props.handleUserMenuClose()}>
                    <List style={{width:"200px"}}>
                        <ListItem button >
                            <LogoutForm handlePostRequest={props.handlePostRequest} />
                        </ListItem>
                        <ListItem button>
                            <DeleteUserForm handleDeleteUser={props.handleDeleteUser} />
                        </ListItem>
                    </List>
                </Drawer>

            </nav>
        )

    }
}



export default UserMenu;