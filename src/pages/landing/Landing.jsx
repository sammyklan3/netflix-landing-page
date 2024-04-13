import Navbar from "../../components/Navbar/Navbar";
import "./landing.css";
import { useState } from "react";

const Landing = () => {

    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="landing-page-container">
            <div className="first-page-container">
                <Navbar />
                <div className="first-page-content">
                    <h3>Unlimited movies, TV shows, and more</h3>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form className="email-form">
                        <input
                            type="email"
                            value={email}
                            placeholder="Email address"
                            onChange={handleChange}
                        />
                        <button type="submit"><h2>Get started</h2></button>
                    </form>
                </div>
                <hr />
            </div>

            <div className="second-page-container">
                <div className="second-page-info">
                    <h2>Enjoy on your TV</h2>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <img src="https://www.airband.co.uk/wp-content/uploads/2022/09/Netflix-on-TV.jpg" alt="netflix-on-tv" />
            </div>
            <hr />

            <div className="third-page-container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="netflix-on-tv" />
                <div className="third-page-info">
                    <h2>Download your shows to watch offline</h2>
                    <p>Save your favorites easily and always have something to watch.</p>
                </div>
            </div>
        </div>
    );
};


export default Landing
