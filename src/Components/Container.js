import React from "react";
import Recipes from "./Recipes";
import "../styles.css";

export default function Container() {
  return (
    <div>
      hello
      <div className="page">
        <header tabIndex="0">Your Cookbook</header>
        <div id="nav-container">
          <div className="bg" />
          <div className="button" tabIndex="0">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </div>
          <div id="nav-content" tabIndex="0">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li className="small">
                <a href="#0">Facebook</a>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <main>
          <div>
            <div className="container">
              <h3>
                {" "}
                Click the button to have a look on your favorite recipes{" "}
              </h3>
              <Recipes />
            </div>
          </div>
          {/*
          <div className="content">
            <h2>
              Off-screen navigation using <span>:focus-within</span>
            </h2>
            <p>
              Adding yet another pure CSS technique to the list of off-screen
              navigation by "hacking" the :focus-within pseudo-class. Have a
              look at the code to see how it works.
            </p>
            <small>
              <strong>NB!</strong> Use a browser that supports :focus-within
            </small>
          </div>
          */}
        </main>
      </div>
    </div>
  );
}
