import React from 'react';
import { useHistory } from 'react-router-dom';
import LandingHeader from './landing-header';
import LandingFooter from './landing-footer';
import LandingSubheader from './landing-subheader';

function LandingPage() {
    let history = useHistory();

    const nextPath = (path: string) => {
        history.push(path);
    };
    
    return (
        <>
            <LandingHeader />
            <LandingSubheader />
           <div className="landing-page__build-connections">
                <div className="landing-page__build-connections--image-container">
                    <img className="landing-page__build-connections--image-container--img" src="./assets/images/Landing_Connections.png" alt=""/>
                </div>
                <div className="landing-page__build-connections--title">
                    Build meaningful connections
                </div>
                <div className="landing-page__build-connections--subtitle">
                    Networking shouldn't be a headcount. Buble is designed to promote meaningful connections that grow into partnerships.
                </div>
            </div>
            <div className="landing-page__make-profile">
                <div className="landing-page__make-profile--image-container">
                    <img className="landing-page__make-profile--image-container--img" src="./assets/images/Landing_Profile.png" alt=""/>
                </div>

                <div className="landing-page__make-profile--title">
                    Make your profile your own
                </div>

                <div className="landing-page__make-profile--subtitle">
                    We think everyone should put their best foot forward. Customize and organize your profile that best represents your passions and interests.
                </div>
            </div>
            <div className="landing-page__user-analytics">
                <div className="landing-page__user-analytics--image-container">
                    <img className="landing-page__user-analytics--image-container--img" src="./assets/images/Landing_Analytics.png" alt=""/>
                </div>
                <div className="landing-page__user-analytics--title">
                    User analytics that don't require a marketing degree
                </div>
                <div className="landing-page__user-analytics--subtitle">
                    Keep an eye on your growth for each of your platforms with ease. Simple, easy-to-understand graphs.
                </div>
            </div>

            <div className="landing-page__join-now">
                <button className="landing-page__subheader--join-now-button" onClick={() =>nextPath('/')}>
                    Join now
                </button>
            </div>

            <LandingFooter />
        </>
    );
};

export default LandingPage;
