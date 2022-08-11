/** @format */

import React, { useEffect } from 'react';
import { useState } from 'react';

const LandingPage = function () {
    const [responseData, setResponseData] = useState({ status: 'Loading' });

    useEffect(() => {
        const abortContoller = new AbortController();

        const fetchData = async () => {
            // If we are running on localhost, we have to specify port in env
            const url = `${process.env.REACT_APP_APIURL}/sanity`;
            const response = await fetch(url);
            const resData = await response.json();
            setResponseData(resData);
        };
        fetchData();

        return () => abortContoller.abort();
    }, []);

    return (
        <div>
            <p>Here is the env var test: {process.env.REACT_APP_TEST}</p>
            <p>
                Here is a request to our linked back-end:{' '}
                {JSON.stringify(responseData)}
            </p>
            <img
                alt="A sports banner"
                src="/banner.jpg"
            />
        </div>
    );
};

export default LandingPage;
