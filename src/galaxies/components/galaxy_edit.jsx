
// class EditConstellation extends React.Component {
//   renderNew() {
    
//     const component = (
//       <ModalButton label="Add Node" className="button button--primary">
//         <NewDocContainer collection={Nodes} label="Add Node" methodName="nodes.create"/>
//       </ModalButton>
//     )
    
//     return !!this.props.currentUser ? component : "";
//   }

//   renderEdit() {

//     const constellation = this.props;

//     const component = (
//       <ModalButton label="Edit" className="button button--secondary">
//         <EditDocContainer collection={Constellations} document={constellation} label="Edit Constellation" methodName="constellations.edit"/>
//       </ModalButton>
//     );

//     return (
//       <div className="item-actions">
//         {this.renderNew()}
//         {this.props.currentUser && this.props.currentUser._id === constellation.userId ? component : ""}
//       </div>
//     )
//   }

//   render() {
    
//     const constellation = this.props;

//     return (
//       <div key={constellation.name} style={{marginBottom: "15px"}}>
//         <h2>{constellation.name} ({constellation.year})</h2>
//         <p>{constellation.review} – by <strong>{constellation.user && constellation.user.username}</strong></p>
//         {this.renderEdit()}
//       </div>
//     )
//   }
// };

// export default EditConstellation;