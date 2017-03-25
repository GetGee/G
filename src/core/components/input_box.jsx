import React from 'react';
// import SearchUniverse from '../universe/components/universe_search.jsx';
// import SearchConstellation from '../constellations/components/constellation_search.jsx';
// import SearchGalaxy from '../galaxies/components/galaxy_search.jsx';
// import CreateUniverse from '../universe/components/universe_create.jsx';
// import CreateConstellation from '../constellations/components/constellation_search.jsx';
// import CreateGalaxy from '../galaxies/components/galaxy_create.jsx';


var components = {
  searchuniverse : 'SearchUniverse',
  searchconstellation : 'SearchConstellation',
  searchgalaxy : 'SearchGalaxy',
  createuniverse : 'CreateUniverse',
  createconstellation : 'CreateConstellation',
  creategalaxy : 'CreateGalaxy'
};

class InputBox extends React.Component {
  render() {
    const {origin, direction} = this.props;
    const component = components[origin + direction];

console.log('in input_box.jsx' + origin + direction);
    return (
      <div>
        <component />
        <CreateConstellation />
        <SearchConstellation />
      </div>
    );
  }
}

export default InputBox;
