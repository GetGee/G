import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
 import IconButton from 'material-ui/IconButton';
 import RaisedButton from 'material-ui/RaisedButton';
 // import LeftNav from 'material-ui/left-nav';
 import Menu from 'material-ui/svg-icons/navigation/menu';
 import MenuItem from 'material-ui/MenuItem/MenuItem.js';
 import Create from 'material-ui/svg-icons/content/add-circle-outline';
 import Search from 'material-ui/svg-icons/action/search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import add from '../components/buttons/svg/add.svg';
import search from '../components/buttons/svg/search.svg';
import logo from '../components/buttons/svg/logo.svg';
import user from '../components/buttons/svg/user.svg';
import help from '../components/buttons/svg/help.svg';
// import GTheme from '../client/configs/theme.jsx';

// Can't import svg's from Public - why?

// import Add from '.public/plus_sign.svg';
// import Search from '/public/MagGlass.svg';

import LogInButtonsDialog from '../components/LogInButtonsDialog.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  title: {
    cursor: 'pointer',
  },
};

// childContextTypes : {
// muiTheme: React.PropTypes.object
// };

 // getChildContext() {
 // return {
 // muiTheme: MuiThemeProvider.getMuiTheme(GTheme),
  // };
 // },
 // handleToggle = () => this.setState({open: !this.state.open});
 // handleClose = () => this.setState({open: false});

// Make this work with a material-ui appbar and svg icons

class Navigation extends React.Component {

	constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const {origin} = this.props;
    return (
      <div className="nav">
        <div className="nav-left">
				    <button id="home" name="home" value="home" onClick='window.location="http://localhost:3000/"'><img src={logo} /></button>
            <div className="nav-search"><button id="search" name="search" value="search" ><input type="search" placeholder="Search" /></button>
              
							            </div>
        </div>
        <div className="nav-right">
				    <button id="help" name="help" value="help" onClick='window.location="http://localhost:3000/"'><img src={help} /></button>
				    <button id="user" name="user" value="user" onClick='window.location="http://localhost:3000/"'><img src={user} /></button>
        </div>

<LogInButtonsDialog />
      </div>
    );
  }

  newOrigin(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {setOrigin} = this.props;
    const originRef = event.currentTarget.value;

    setOrigin(originRef);
  }
}

export default Navigation;


// Menu icon should only appear when viewing a single item
// LeftNav should contain all the admin data for current item displayed
