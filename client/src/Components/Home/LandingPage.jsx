/** @format */

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { centeredFlexBox } from '../Shared/StylePresets';

const LandingPage = function () {
    const [responseData, setResponseData] = useState({ status: 'Loading' });

    useEffect(() => {
        const abortContoller = new AbortController();

        // This eval is required on all pages that want to use AOS
        /* eslint-disable-next-line */
        eval('AOS.init()');

        const fetchData = async () => {
            // If we are running on localhost, we have to specify port in env
            const url = `${process.env.REACT_APP_APIURL}/sanity`;
            const response = await fetch(url);
            response
                .json()
                .then(data => setResponseData(data))
                .catch(_ =>
                    setResponseData({ error: 'Response was not JSON' })
                );
        };
        fetchData();

        return () => abortContoller.abort();
    }, []);

    return (
        <Box sx={{ ...centeredFlexBox, p: 3, my: 3 }}>
            <Typography
                variant="h3"
                textAlign="center"
            >
                Here is the env var test:{' '}
                {process.env.REACT_APP_TEST ?? 'NO .ENV LOADED'}
            </Typography>
            <Typography
                variant="h4"
                textAlign="center"
            >
                Here is a request to our linked back-end:{' '}
                {JSON.stringify(responseData)}
            </Typography>
            <img
                alt="A sports banner"
                src="/banner.jpg"
            />
        </Box>
    );
};

export default LandingPage;
