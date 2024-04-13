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
            </div>
        </div>
    );
};


export default Landing
