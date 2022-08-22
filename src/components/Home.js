import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="u-input">
          <input type="text" placeholder="Ask and you shall receive" />
          <div id="button">Seek</div>
        </div>
        <div className="home">
          <h1 id="home-title">Your Adventure</h1>

          <div id="home-container">
            <Link to="/directory/world" id="world">
              <div>
                <span className="main-directory-text">World</span>
              </div>
            </Link>
            <Link to="/directory/wizards" id="wizards">
              <div>
                <span className="main-directory-text">Wizards</span>
              </div>
            </Link>
            <Link to="/directory/bestiary" id="bestiary">
              <div>
                <span className="main-directory-text">Bestiary</span>
              </div>
            </Link>
            <Link to="/directory/potions" id="potions">
              <div>
                <span className="main-directory-text">Potions</span>
              </div>
            </Link>
            <Link to="/directory/deities" id="deities">
              <div>
                <span className="main-directory-text">Deities</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
