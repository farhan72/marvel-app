import React from 'react';
import { APIv1 } from '../../helper/authorization';

function Index() {
    console.log(APIv1('comics'))
    return (
        <>
            <h1>Iki Home Su</h1>
        </>
    )
}

export default Index;