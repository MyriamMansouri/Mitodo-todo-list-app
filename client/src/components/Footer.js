import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import LocalCafeIcon from '@material-ui/icons/LocalCafeOutlined'
import Link from '@material-ui/core/Link';

const Footer = () => (
    <footer>
        <AppBar elevation={0} color="default" position="fixed" style={{ bottom: 0, top: 'auto' }}>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" py={1}>
                <Typography component="p" variant="body2">
                    Made with
                </Typography>
                <LocalCafeIcon style={{ fontSize: 17, padding: "0 3px" }}/>
                <Typography component="p" variant="body2">
                    by <Link href="https://myriammansouri.com">Myriam Mansouri</Link>
                </Typography>
            </Box>
        </AppBar>
    </footer>
)

export default Footer