import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import { APIv1 } from '../../helper/authorization';
import axios from 'axios';
import Loader from '../../components/loader';
import { Redirect } from 'react-router-dom';

const Index = () => {
    const [isAuthenticated, setAuthenticatedStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    const login = () => {
        const now = new Date();
        const publicKey = 'a775053005dce3b2e0f2dede7c7a1bd9';
        const timestamp = now.getTime();
        cookie.set('timestamp', timestamp, { expires: 7 });
        cookie.set('publicKey', publicKey, { expires: 7 });
        setLoading(true)
        checkStatusAPI();
    }

    useEffect(() => checkStatusAPI(), [])

    async function checkStatusAPI() {
        try {
            await axios.get(APIv1('comics', { limit: 5 }));
            setAuthenticatedStatus(true);
            setLoading(false);
        } catch (e) {
            setAuthenticatedStatus(false);
            setLoading(false);
        }
    }

    if (isAuthenticated) {
        return  <Redirect to="/" />;
    }

    return (
        <>
            <Loader isLoading={loading} />
            <div style={styles.container}>
                <button style={{ ...styles.btn, ...styles.btnSuccess }}
                    onClick={() => login()}>Login</button>
            </div>
        </>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        outline: 'none',
        border: 'none',
        padding: '12px 14px',
        width: '30%',
        cursor: 'pointer'
    },
    btnSuccess: {
        backgroundColor: '#30d307',
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
}

export default Index;
