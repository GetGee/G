import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import logo from './core/components/buttons/svg/logo.svg';
import add from './core/components/buttons/svg/add.svg';
import Navigation from './core/components/navigation.jsx';
import search from './core/components/buttons/svg/search.svg';
import help from './core/components/buttons/svg/help.svg';
import user from './core/components/buttons/svg/user.svg';
import './core/components/buttons/btn.css';
import './App.css';
import './index.css';
import SearchBar from './core/components/SearchBar.js';
import Title from './core/components/title.jsx';
import Core from './core/components/core.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
             <div className="AppBar">
          			<Navigation />
              </div>
          </div>

        <div className="App-intro">
           <div className="container">
              <p> Search for people, events, organizations, things or ideas.</p>
              <div id="core" className="core">								
				        <Core/>
        			</div>
      			</div>
  			</div>
      
			<div className="body">
  	 		<p> copyright © 2017 Nayelo </p>
			</div>
		</div>
		);
  }
}
export default App;
