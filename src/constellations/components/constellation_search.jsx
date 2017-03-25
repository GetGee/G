import React from 'react';
import NoSSR from 'react-no-ssr';
import Modal from './modal.jsx';
import SmartContainers from 'react-simple-form-container';
import FormContainers from 'react-simple-form-container';
import Constellations from '../lib/schemas/constellations';
import Nodes from '../lib/schemas/nodes';

/* const ModalButton = Modal.ModalButton;
 const NewDocContainer = FormContainers.NewDocContainer;
 const EditDocContainer = FormContainers.EditDocContainer;
 const ListContainer = SmartContainers.ListContainer;
 const DocumentContainer = SmartContainers.DocumentContainer; */


class SearchConstellation extends React.Component {
  render() {
		return null;
  }
}


const LoadMore = props => 
  <a href="#" className="load-more button button--primary" onClick={props.loadMore}>Load More ({props.count}/{props.totalCount})</a>;

class CreateConstellation extends React.Component {
  renderNew() {
    return null;

  }

  render() {
		return null;
  }
}

export default CreateConstellation;
