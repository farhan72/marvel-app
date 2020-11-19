import React from 'react';

const Index = () => {
    return (
        <div style={login.container}>
            <button style={{ ...login.btn, ...login.btnSuccess }}>Login</button>
        </div>
    )
}

const login = {
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
        width: '30%'
    },
    btnSuccess: {
        backgroundColor: '#30d307',
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
}

export default Index;