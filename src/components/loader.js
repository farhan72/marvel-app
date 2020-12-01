import React from 'react';
import '../styles/modal.css'

const Loader = ({ isLoading }) => {
    return isLoading ? (
        <div className="container-modal">
            <p className="body">Loading...</p>
        </div>
    ) : ''
}

export default Loader;