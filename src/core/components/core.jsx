import React from 'react';
import Title from '../components/title.jsx';
import core from '../actions';
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
      <div className="container core" id="core">
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

