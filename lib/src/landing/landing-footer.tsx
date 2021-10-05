import React from 'react';
import { useHistory } from 'react-router-dom';

function LandingFooter() {
    let history = useHistory();

    const nextPath = (path: string) => {
        history.push(path); // TODO: add routes for each button being rendered below. (create pages first)
    };

    return(
        <div className="landing-page__footer">
            <div className="landing-page__footer--copyright">
                <img src="./assets/icons/buble-footer.png" alt="" className="landing-page__footer--copyright-image"/>
            </div>

            <div className="landing-page__footer--link-container">
                <button className="landing-page__footer--button">
                    About
                </button>
                <button className="landing-page__footer--button">
                    Privacy
                </button>
                <button className="landing-page__footer--button">
                    Careers
                </button>
                <button className="landing-page__footer--button">
                    FAQ
                </button>
                <button className="landing-page__footer--button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default LandingFooter;
