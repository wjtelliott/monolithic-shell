import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { centeredFlexBox, removeLinkDecor } from '../Shared/StylePresets';

const AuthorizePage = () => {
    const { user, isLoading, isAuthorized } = useAuth0();
    const navigate = useNavigate();
    const [tooLong, setTooLong] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const abortEffect = () => abortController.abort();
        if (isLoading) return abortEffect;

        if (!user || !isAuthorized) {
            navigate('/');
            return abortEffect;
        }

        const sendUserData = async () => {
            const payload = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...user }),
            };
            await fetch(`${process.env.REACT_APP_APIURL}/users/new`, payload);
            useNavigate('/');
        };
        sendUserData();

        return abortEffect;
    }, [isLoading]);

    useEffect(() => {
        // 5 seconds
        setTimeout(setTooLong(true), 5000);
    }, []);

    return (
        <Box sx={{ ...centeredFlexBox }}>
            <Typography
                variant="h4"
                textAlign="center"
            >
                Please wait while we redirect you...
            </Typography>
            {/* loading svg here? */}
            {tooLong && (
                <Typography
                    variant="h6"
                    textAlign="center"
                >
                    If this takes longer than 5 seconds, please click{' '}
                    <Link
                        to="/"
                        style={{ ...removeLinkDecor, color: 'blue' }}
                    >
                        Here
                    </Link>
                </Typography>
            )}
        </Box>
    );
};

export default AuthorizePage;
