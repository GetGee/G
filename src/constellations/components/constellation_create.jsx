import React, { Component } from 'react';
import NoSSR from 'react-no-ssr';
import React from 'react';
import Modal from './modal.jsx';
import SmartContainers from 'react-simple-form-container';
import FormContainers from 'react-simple-form-container';
import Constellations from '../lib/schemas/constellations';
import EditConstellation from './components/constellation_edit.jsx';

// ModalButton = Modal.ModalButton;
// NewDocContainer = FormContainers.NewDocContainer;
// EditDocContainer = FormContainers.EditDocContainer;
// ListContainer = SmartContainers.ListContainer;


 const LoadMore = props => 
   <a href="#" className="load-more button button--primary" onClick={props.loadMore}>Load More ({props.count}/{props.totalCount})</a>

// class CreateConstellation extends React.Component {
//   renderNew() {
    
// console.log('in constellation_create.jsx renderNew');
//     const component = (
//       <ModalButton label="Add Constellation" className="button button--primary">
//         <NewDocContainer collection={Constellations} label="Add Constellation" methodName="constellations.create"/>
//       </ModalButton>
//     )
    
//     return !!this.props.currentUser ? component : "";
//   }

//   render() {
// // results comes from ListContainer
// console.log('in constellation_create.jsx render' + this.props.results);
//     return (
//       <div className="constellations">
//         {this.renderNew()}
//         {this.props.results.map(constellation => 
//           <Constellation 
//             key={constellation._id} 
//             {...constellation} 
//             currentUser={this.props.currentUser}
//           />)
//         }
//         {this.props.hasMore ? 
//           (this.props.ready ? 
//             <LoadMore {...this.props}/> : 
//             <p>Loading…</p>
//           ) : 
//           <p>No more constellations</p>
//         }
//       </div>
//     )
//   }
// };

// export default CreateConstellation;
