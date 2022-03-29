import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Box, IconButton, Toolbar, Typography} from '@mui/material';
import {experimentalStyled} from "@mui/material";
import MenuIcon from '../../icons/Menu';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import {useSelector} from "react-redux";

const DashboardNavbarRoot = experimentalStyled(AppBar)(({theme}) => ({
    ...(theme.palette.mode === 'light' && {
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none',
        color: theme.palette.primary.contrastText
    }),
    ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none'
    }),
    zIndex: theme.zIndex.drawer + 100
}));

const NavBar = (props) => {
    const {onSidebarMobileOpen, ...other} = props;
    const {user} = useSelector((state) => state.auth);

    return (
        <DashboardNavbarRoot {...other}>
            <Toolbar sx={{minHeight: 64}}>
                <IconButton
                    color="inherit"
                    onClick={onSidebarMobileOpen}
                    sx={{
                        display: {
                            lg: 'none'
                        }
                    }}
                >
                    <MenuIcon fontSize="small"/>
                </IconButton>
                <RouterLink to="/" style={{textDecoration: 'none', color: '#FFF'}}>
                    <Typography color="textPrimary" variant="h2">AGMEETING</Typography>
                </RouterLink>
                <Box
                    sx={{
                        flexGrow: 1,
                        ml: 2
                    }}
                />
                {/* <LanguagePopover /> */}
                <Box sx={{ml: 1}}>
                    {/* <ContentSearch /> */}
                </Box>
                <Box sx={{ml: 1}}>
                    {/* <ContactsPopover /> */}
                </Box>
                {user &&
                    <Box sx={{ml: 1}}>
                        <NotificationsPopover/>
                    </Box>
                }
                {user &&
                    <Box sx={{ml: 2}}>
                        <AccountPopover/>
                    </Box>}
                {!user &&
                    <Box sx={{ml: 2}}>
                        <RouterLink to="/login" style={{textDecoration: 'none', color: '#FFF'}}>
                            <h4>
                                Login
                            </h4>
                        </RouterLink>
                    </Box>
                }
                {!user &&
                    <Box sx={{ml: 2}}>
                        <RouterLink to="/register" style={{textDecoration: 'none', color: '#FFF'}}>
                            <h4>
                                Register
                            </h4>
                        </RouterLink>
                    </Box>
                }
            </Toolbar>
        </DashboardNavbarRoot>
    );
};

NavBar.propTypes = {
    onSidebarMobileOpen: PropTypes.func
};

export default NavBar;
