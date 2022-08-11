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

const NavBarAvatar = ({
    settings,
    anchorElUser,
    handleCloseUserMenu,
    handleOpenUserMenu,
}) => {
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
            </Menu>
        </Box>
    );
};

export default NavBarAvatar;
