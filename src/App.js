import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Bio from 'pages/Bio/Bio';
import Contacts from 'pages/Contacts/Contacts';
import Works from 'pages/Works/Works';
import Background from 'components/Background/Background';
import './App.css';
import Parallax from 'parallax-js';

const App = () => {

  let doParallax = () => {
		let scene = document.getElementById('scene');
		new Parallax(scene);
	}

  useEffect(() => {
    doParallax()
  })

	let emailMe = () => {
		window.location.href = "mailto:tommaso.vasari@gmail.com"
	}

  return(
    <Background>
      <BrowserRouter>
        <Switch>
          <ul id="scene" data-pointer-events="all"> 
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bio">
              <Bio />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
          </ul>
        </Switch>
      </BrowserRouter>
    </Background>
  );

}

export default App;
