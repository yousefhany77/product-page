import { useState } from "react";
import "./App.css";
import Toggle from "./ToggleSwitch";

function App() {
  const prices = {
    professional: "$20",
    team: "$30",
  };
  const [checked, setchecked] = useState(false);
  function toggle() {
    setchecked((prev) => !prev);
    console.log("ToggleSwitch");
  }
  return (
    <div className="container">
      <nav>
        <h1>Musicify</h1>
        <ul>
          <li>Features</li>
          <li>Prices</li>
          <li>Login</li>
          <button id="nav-btn">Get Started</button>
        </ul>
      </nav>
      {/* Prices */}
      <div className="pricing">
        <h1>Pricing</h1>
        <span className="toggle">
          <h3 className={!checked && "Bold"}>Monthly</h3>
          <Toggle checked={checked} handleClick={toggle} />
          <h3 className={checked && "Bold"}>Yearly</h3>
        </span>
        <div className="plans">
          <div className="plan">
            <h3>Basic</h3>
            <h2>Free</h2>
            <h5>Free plan all users</h5>
            <ul>
              <li>Store up to 20 songs</li>
              <li>2 collaborators</li>
              <li>Unlimited shares</li>
              <li>128 bit AES encryption</li>
              <li>Mac, PC, Android, iOS, and Browser</li>
            </ul>
            <button>Get Started free</button>
          </div>
          <div className="plan" id="plan2">
            <h3>Professional</h3>
            {!checked ? (
              <h2>{prices.professional}</h2>
            ) : (
              <span className="yearPrice">
                <h2>$199</h2>
                <h3 className="strikethrough ">${240}</h3>
              </span>
            )}
            <h5>Ideal for individual creators.</h5>
            <ul>
              <li>Everything in Basic</li>
              <li>250GB of song storage</li>
              <li>250GB of asset storage</li>
              <li>2 2 collaborators</li>
              <li>Share link password protection</li>
            </ul>
            <button>Get Started free</button>
          </div>
          <div className="plan" id="plan3">
            <h3>Team</h3>
            {!checked ? (
              <h2>{prices.professional}</h2>
            ) : (
              <span className="yearPrice">
                <h2>$299</h2>
                <h3 className="strikethrough ">${360}</h3>
              </span>
            )}
            <h5>Small teams with up to 10 users.</h5>
            <ul>
              <li>Everything in Professional</li>
              <li>Shared team workspace with up to</li>
              <li>10 users.</li>
              <li>Custom storage plans</li>
              <li>Custom branding by the team</li>
            </ul>
            <button>Get Started free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
