import React from 'react';
import Navigation from '../components/navigation.jsx';
import Title from '../components/title.jsx';
import InputBox from '../components/input_box.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import core from '../actions';
// import ThemeManager from 'material-ui/lib/styles/theme-manager';
// import GTheme from '/client/configs/theme.jsx';
// import Paper from 'material-ui/lib/paper';
// import RaisedButton from 'material-ui/lib/raised-button';
import SearchBar from '../components/SearchBar.js';

const styles = {
  title: {
    cursor: 'pointer',
  },

  radioButton: {
    marginBottom: 16,
  }
};

const style = {
  height: 300,
  width: 800,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
};

class Core extends React.Component {
  render() {
    return (
			<div>     
                <Title origin={this.props.origin} direction={this.props.direction}></Title>
        
					<div id="search" className="search">

        <SearchBar onTermChange={this.props} />

       
                                    </div>
         
      </div>
			
    );
  }

  newDirection(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {setDirection} = this.props;
    const directionRef = event.currentTarget.value;

    setDirection(directionRef);
  }
}

export default Core;

