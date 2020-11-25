import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { APIv1 } from '../../helper/authorization';
import axios from 'axios';
import Loader from '../../components/loader';
import { Redirect } from 'react-router-dom';
import { getComics } from '../../services/comics';

const cookie = new Cookies();
const Index = () => {
    const [isAuthenticated, setAuthenticatedStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    const login = () => {
        const now = new Date(),
            expire = new Date();
        const publicKey = 'a775053005dce3b2e0f2dede7c7a1bd9';
        const timestamp = now.getTime();
        expire.setTime(now.getTime() + 3600000 * 24 * 7);
        cookie.set('timestamp', timestamp, { expires: expire });
        cookie.set('publicKey', publicKey, { expires: expire });
        const params = { limit: 5 }
        setLoading(true)
        axios.get(APIv1('comics', params)).then(response => {
            setLoading(false);
            if (response.status === 200) {
                setAuthenticatedStatus(true);
            }
        }).catch(err => setLoading(false));
    }

    useEffect(() => checkStatusAPI(), [])

    async function checkStatusAPI() {
        try {
            await getComics();
            setAuthenticatedStatus(true);
            setLoading(false)
        } catch (e) {
            setAuthenticatedStatus(false);
            setLoading(false)
            return e;
        }
    }

    return !isAuthenticated ? (
        <>
            <Loader isLoading={loading} />
            <div style={styles.container}>
                <button style={{ ...styles.btn, ...styles.btnSuccess }}
                    onClick={() => login()}>Login</button>
            </div>
        </>
    ) : <Redirect to="/" />;
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