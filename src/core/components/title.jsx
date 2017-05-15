import React, { Component } from 'react';
/*

var headings = {
	universe: 'Search for people, events, organizations, things or ideas.',
	constellation: 'Search for the name of a constellation.',
	galaxy: 'Search for the name of a galaxy.'
};
*/

class Title extends React.Component {
  render() {
    console.log(this.props);
    const {direction} = this.props;
    const searchType = this.props.searchType;
        var heading = '';
      return (
      <div>
        <h2>
            { (this.props.searchType === 'universe') ? 'Search for people, events organizations, things or ideas.' :
            (this.props.searchType === 'constellation') ? 'Search for the name of a constellation.' :
            'Search for the name of a galaxy.' }
        </h2>
      </div>
    );
  }
}

export default Title;
