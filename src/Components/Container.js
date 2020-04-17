import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Recipes from "./Recipes";
import "../styles.css";

export default function Container() {
  return (
    <div>
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
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="small">
                <a href="#0">Facebook</a>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <main>
          <div className="block">
            <Switch>
              <Route path="/home">
                Here will be displayed Home page content
              </Route>
              <Route path="/recipes">
                <div className="container">
                  <h3>
                    {" "}
                    Click the button to have a look on your favorite recipes{" "}
                  </h3>
                  <Recipes />
                </div>
              </Route>
              <Route path="/about">
                Here will be displayed About page content
              </Route>
              <Route path="/contact">
                Here will be displayed Contact page content
              </Route>
            </Switch>
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
