import React, { useState, useEffect } from 'react';
import Header from '../header'
import Axios from 'axios';
import { APIv1 } from '../../helper/authorization';
import { Redirect } from 'react-router-dom';
import Loader from '../loader'

function Layout() {
    const [isAuthenticated, userHasAuthenticated] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => checkStatusAPI(), [isAuthenticated])

    function checkStatusAPI() {
        Axios.get(APIv1('comics', { limit: 5 })).then(result => {
            userHasAuthenticated(true);
            setLoading(false);
        }).catch(error => {
            userHasAuthenticated(false);
            setLoading(false);
        })
    }

    if (!isAuthenticated) {
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