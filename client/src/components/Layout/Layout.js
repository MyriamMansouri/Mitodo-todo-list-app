import React from 'react'
import Navbar from '../NavBar'
import styles  from './Layout.module.css'
import Footer from '../Footer'

const Layout = (props) => (
    <div >
        <header>
            <Navbar
                user={props.user}
                loggedIn={props.loggedIn}
                handlePostRequest={props.handlePostRequest}
                handleUserMenuClose={props.handleUserMenuClose}
                handleUserMenuOpen={props.handleUserMenuOpen}
                userMenuOpen={props.userMenuOpen}
                handleDeleteUser={props.handleDeleteUser}
            />
        </header>

        <main className={styles.main_container}>
            {props.children}
        </main>

        
           <Footer />            

    </div>
)

export default Layout