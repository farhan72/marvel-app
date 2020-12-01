import React, { useState, useEffect } from 'react';
import Header from '../header'
import axios from 'axios';
import { APIv1 } from '../../helper/authorization';
import { Redirect, Route } from 'react-router-dom';
import Home from '../../containers/home';
import Comics from '../../containers/comics';
import Characters from '../../containers/characters';
import Loader from '../loader'

function Layout() {
    const [isAnauthenticated, userAnauthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => checkStatusAPI(), []);

    async function checkStatusAPI() {
        setLoading(true);
        await axios.get(APIv1('comics', { limit: 5 }))
            .then(() => {
                userAnauthenticated(false);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                if (err.response.status === 401) {
                    userAnauthenticated(true)
                }
            });
    }

    if (isAnauthenticated) {
        return (
            <>
                <Loader isLoading={loading} />
                <Redirect to="/login" />
            </>
        )
    }
    return (isAnauthenticated === false) ? (
        <>
            <Loader isLoading={loading} />
            <Header />

            <div>
                <Route exact path="/home" component={Home} />
                <Route exact path="/comics" component={Comics} />
                <Route exact path="/characters" component={Characters} />
                <Route exact path="**" render={() => <Redirect to="home" />} />
                <Redirect from="/" to="home" />
            </div>
        </>
    ) : <Loader isLoading={true} />;
}

export default Layout;
