import React from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

const cookie = new Cookies();
const Index = () => {
    const history = useHistory();
    const login = () => {
        const now = new Date(),
            expire = new Date();
        const publicKey = 'a775053005dce3b2e0f2dede7c7a1bd9';
        const privateKey = '42f82eb3d0d38b7545a44a22d9e61c7b29151b98';
        const timestamp = now.getTime();
        expire.setTime(now.getTime() + 3600000 * 24 * 7);
        cookie.set('timestamp', timestamp, { expires: expire });
        cookie.set('publicKey', publicKey, { expires: expire });
        cookie.set('privateKey', privateKey, { expires: expire });
        if (cookie.getAll()) {
            history.push('home');
        }
    }
    return (
        <div style={styles.container}>
            <button style={{ ...styles.btn, ...styles.btnSuccess }}
                onClick={() => login()}>Login</button>
        </div>
    )
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