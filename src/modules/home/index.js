import React from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';
// import { APIv1 } from '../../helper/authorization';

const cookie = new Cookies();
function Index() {
    const history = useHistory();
    // console.log(APIv1('comics'))
    const logout = () => {
        cookie.remove('publicKey');
        cookie.remove('timestamp');
        history.push('/');
    }
    return (
        <>
            <button type="button" onClick={() => logout()}>Logout</button>
            <h1>Iki Home Su</h1>
        </>
    )
}

export default Index;