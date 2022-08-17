import React from 'react';
import {
    Box,
    IconButton,
    Typography,
    Menu,
    Avatar,
    Tooltip,
    MenuItem,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

const NavBarAvatar = ({
    settings,
    anchorElUser,
    handleCloseUserMenu,
    handleOpenUserMenu,
}) => {
    const { logout } = useAuth0();
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                >
                    <Avatar
                        alt="Profile"
                        src="/static/images/avatar/1.jpg"
                    />
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
                {settings.map(setting => (
                    <MenuItem
                        key={setting}
                        onClick={handleCloseUserMenu}
                    >
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                <MenuItem onClick={logout}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default NavBarAvatar;
