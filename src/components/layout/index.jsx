import React, { useState, useEffect, Suspense } from 'react';
import Header from '../header'
import axios from 'axios';
import { APIv1 } from '../../helper/authorization';
import { Redirect, Route } from 'react-router-dom';
import Home from '../../containers/home';
import Comics from '../../containers/comics';
import Characters from '../../containers/characters';
import Loader from '../loader'
import { Container } from 'semantic-ui-react';

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
            <Header />

            <Container className="mt-1">
                <Route exact path="/home" render={props => (
                    <Suspense fallback={<Loader isLoading={loading} />}>
                        <Home {...props} />
                    </Suspense>
                )} />
                <Route exact path="/comics" render={props => (
                    <Suspense fallback={<Loader isLoading={loading} />}>
                        <Comics {...props} />
                    </Suspense>
                )} />
                <Route exact path="/characters" render={props => (
                    <Suspense fallback={<Loader isLoading={loading} />}>
                        <Characters {...props} />
                    </Suspense>
                )} />
                <Route exact path="**" render={() => <Redirect to="home" />} />
                <Redirect from="/" to="home" />
            </Container>
        </>
    ) : <Loader isLoading={true} />;
}

export default Layout;
