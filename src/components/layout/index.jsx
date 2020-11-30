import React, { useState, useEffect } from 'react';
import Header from '../header'
import axios from 'axios';
import { APIv1 } from '../../helper/authorization';
import { Redirect } from 'react-router-dom';
import Loader from '../loader'

function Layout() {
    const [isAnauthenticated, userAnauthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => checkStatusAPI(), []);

    async function checkStatusAPI() {
        try {
            await axios.get(APIv1('comics', { limit: 5 }));
            userAnauthenticated(false);
            setLoading(false);
        } catch (e) {
            userAnauthenticated(true);
            setLoading(false);
        }
    }

    if (isAnauthenticated) {
        return (
            <>
                <Loader isLoading={loading} />
                <Redirect to="/login" />
            </>
        )
    }

    return (
        <>
            <Loader isLoading={loading} />
            <Header />
        </>
    )
}

export default Layout;
