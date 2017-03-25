import React, { Component } from 'react';
import Title from '../components/title.jsx';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchType: 'constellation',
      searchInput: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
	handleTextChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  handleRadioChange(event) {
    this.setState({
      searchType: event.target.value,
    });
  }
	render() {
    return (
      <div>
        <Title origin={this.props.origin} direction={this.props.direction}></Title>
        <form>
          <input
            id="searchInput"
            type="text"
            placeholder="Search..."
            value={this.state.searchInput}
            onChange={this.handleTextChange}
          />
          <p>
            <label>
              <input
                type = "radio"
                name="searchType"
                value="constellation"
                onClick={this.handleRadioChange}
			          onChange={this.handleRadioChange}
                checked={this.state.searchType === 'constellation'}/>Constellations
            </label>
            <label>
              <input
                type = "radio"
                name="searchType"
                value="galaxy"
                onClick={this.handleRadioChange}
			          onChange={this.handleRadioChange}
                checked={this.state.searchType === 'galaxy'}/>Galaxies
            </label>
            <label>
              <input
                type = "radio"
                name="searchType"
                value="universe"
								onClick={this.handleRadioChange}
			          onChange={this.handleRadioChange}
                checked={this.state.searchType === 'universe'}/>Universe
            </label>
          </p>
        </form>
      </div>       
    );
  }
}
export default SearchBar;
