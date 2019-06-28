import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from './UserMenu'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const NavBar = (props) => (
    <div>
        <AppBar position="relative">
            <Box py={1} px={2} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h5">
                    <NavLink to={`/`}>
                        Mitodo
                    </NavLink>
                </Typography>

                <UserMenu
                    user={props.user}
                    loggedIn={props.loggedIn}
                    handlePostRequest={props.handlePostRequest}
                    handleDeleteUser={props.handleDeleteUser}
                    handleUserMenuClose={props.handleUserMenuClose}
                    handleUserMenuOpen={props.handleUserMenuOpen}
                    userMenuOpen={props.userMenuOpen}
                />
            </Box>

        </AppBar>
    </div>

)

export default NavBar;