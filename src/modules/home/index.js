import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { useHistory, Redirect } from 'react-router-dom';
import Loader from '../../components/loader';
import Axios from 'axios';
import { APIv1 } from '../../helper/authorization';
// import { APIv1 } from '../../helper/authorization';

function Index() {
    const history = useHistory();
    const [isAuthenticated, userHasAuthenticated] = useState(true);
    const [loading, setLoading] = useState(true);

    const logout = () => {
        cookie.remove('publicKey');
        cookie.remove('timestamp');
        if (!cookie.get('publicKey')) {
            checkStatusAPI()
            history.push('/');
        }
    }

    useEffect(() => checkStatusAPI(), [])

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
            <button type="button" onClick={() => logout()}>Logout</button>
            <h1>Iki Home Su</h1>
        </>
    )
}

export default Index;