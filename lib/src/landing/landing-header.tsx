import React from 'react';
import { useHistory } from 'react-router-dom';

function LandingHeader() {
    let history = useHistory();
    const nextPath = (path: string) => {
        history.push(path);
    };

    return (
        <div className="landing-page__header">
            <div className="landing-page__header--logo-image-container">
                <img src="./assets/icons/buble-logo-placeholder.png" className="landing-page__header--logo-image" alt="" onClick={() => nextPath('/')}/>
            </div>
            <div className="landing-page__header--sign-in-container">
                <button className="landing-page__header--sign-in-button" onClick={() => nextPath('/sign-in')}>
                    Sign in
                </button>
            </div>
        </div>
    );
}

export default LandingHeader;
