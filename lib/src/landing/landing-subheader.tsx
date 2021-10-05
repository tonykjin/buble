import React from 'react';
import { useHistory } from 'react-router-dom';

function LandingSubheader() {
    let history = useHistory();

    const nextPath = (path: string) => {
        history.push(path);
    };

    return(
        <div className="landing-page__subheader">
            <div className="landing-page__subheader--title">
                Growth rarely happens alone. Professional networking for the modern influencer.
            </div>
            <div className="landing-page__subheader--subtitle">
                Buble lets you network, collaborate, and manage your accounts - all in one central place.
            </div>
            <button className="landing-page__subheader--join-now-button" onClick={() => nextPath('/sign-up')}>
                Join now
            </button>
        </div>
    );
}

export default LandingSubheader;
