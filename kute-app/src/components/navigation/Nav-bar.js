import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';
import "./Nav-bar.css";

// const pages = [

//     { name: 'Friends', location: "/friends" },
//     { name: 'Events', location: "/events" },
//     { name: 'Chat', location: "/chat" },
//     { name: 'Profile', location: "/profile" }

// ];




const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color='transparent' elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'primary',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>

                    {/* collapsed Nav */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleCloseNavMenu}>
                                <ul className="hamburgerLinks">
                                    <li><Link href="/friends">Friends</Link></li>

                                    <li><Link href="/events">Events</Link></li>

                                    <li><Link href="/buddies">Buddies</Link></li>

                                    <li><Link href="/chat">Chat</Link></li>
                                </ul>
                            </MenuItem>

                        </Menu>
                    </Box>


                    {/* Navbar Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <div className="link">
                            <Link href="/friends" onClick={handleCloseNavMenu}>
                                Friends
                            </Link>
                        </div>
                        <div className="link">
                            <Link href="/events" onClick={handleCloseNavMenu}>
                                Events
                            </Link>
                        </div>
                        <div className="link">
                            <Link href="/chat" onClick={handleCloseNavMenu}>
                                Chat
                            </Link>
                        </div>
                        <div className="link">
                            <Link href="/profile" onClick={handleCloseNavMenu}>
                                Edit Profile
                            </Link>
                        </div>
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                    {/* </Box> */}
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;