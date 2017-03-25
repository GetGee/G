import React, { Component } from 'react';

var headings = {
//   'searchuniverse': 'Search for people, events, organizations, things or ideas.',
//   'searchconstellation': 'Search for the name of a constellation.',
//   'searchgalaxy': 'Search for the name of a galaxy.',
//   'createuniverse': 'Create a person, event, organization, thing or idea.',
//   'createconstellation': 'Create a constellation of people, events, organizations, things and ideas.',
//   'creategalaxy': 'Create a galaxy of constellations.'
};

class Title extends React.Component {
  render() {
    const {origin, direction} = this.props;
//     const heading = headings[origin+direction];
    return (
      <div>
        <h2>
        </h2>
      </div>
    );
  }
}

export default Title;
