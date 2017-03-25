// import NoSSR from 'react-no-ssr';
// import Modal from './modal.jsx';
// import SmartContainers from "meteor/utilities:react-list-container";
// import FormContainers from "meteor/utilities:react-form-containers";
// import {Constellations} from '/lib/collections';

// ModalButton = Modal.ModalButton;
// NewDocContainer = FormContainers.NewDocContainer;
// EditDocContainer = FormContainers.EditDocContainer;
// ListContainer = SmartContainers.ListContainer;


// class SearchConstellation extends React.Component {
//   render() {
//     return (
//       <div className="wrapper">

//         <NoSSR onSSR={<p>Loading…</p>}>
//           <LogInButtons />
//         </NoSSR>

//         <div className="constellation">
//           <ListContainer 
//             collection={Constellations} 
//             publication="constellations.list"
//             terms={{options: {sort: {createdAt: -1}}}}
//             options={{sort: {createdAt: -1}}}
//             joins={Constellations.getJoins()}
//             limit={15}
//           >
//             <ConstellationList/>
//           </ListContainer>
//         </div>

//       </div>
//     )
//   }
// };

// export default SearchConstellation;
