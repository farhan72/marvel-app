import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useHistory, Redirect } from 'react-router-dom';
import { getComics } from '../../services/comics';
import Loader from '../../components/loader';
// import { APIv1 } from '../../helper/authorization';

const cookie = new Cookies();
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

    async function checkStatusAPI() {
        try {
            await getComics();
            userHasAuthenticated(true);
            setLoading(false)
        } catch (e) {
            userHasAuthenticated(false);
            setLoading(false)
            return e;
        }
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