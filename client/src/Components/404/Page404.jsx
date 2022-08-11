import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { centeredFlexBox, removeLinkDecor } from '../Shared/StylePresets';

const Page404 = () => {
    return (
        <Box sx={{ ...centeredFlexBox }}>
            <Typography
                variant="h3"
                textAlign="center"
                sx={{ p: 3, my: 3 }}
            >
                This page doesn't exist! Click{' '}
                <Link
                    style={{ ...removeLinkDecor, color: 'blue' }}
                    to="/"
                >
                    Here
                </Link>{' '}
                to return home.
            </Typography>
        </Box>
    );
};

export default Page404;
