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
import add from '../buttons/svg/add.svg';
import search from '../buttons/svg/search.svg';
import logo from '../buttons/svg/logo.svg';
import user from '../buttons/svg/user.svg';
import help from '../buttons/svg/help.svg';
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
      <div>
				<span><button id="home" name="home" value="home" onClick='window.location="http://localhost:3000/"'><img src={logo} /></button></span>
				<span><button id="search" name="search" value="search" onClick={this.newOrigin.bind(this)}><img src={search} /></button></span>
				<span><button id="create" name="create" value="create" onClick={this.newOrigin.bind(this)}><img src={add} /></button></span>
				<span><button id="help" name="help" value="help" onClick='window.location="http://localhost:3000/"'><img src={help} /></button></span>
				<span><button id="user" name="user" value="user" onClick='window.location="http://localhost:3000/"'><img src={user} /></button></span>
         
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

