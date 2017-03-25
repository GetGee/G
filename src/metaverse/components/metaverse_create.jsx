
// const LoadMore = props => 
//   <a href="#" className="load-more button button--primary" onClick={props.loadMore}>Load More ({props.count}/{props.totalCount})</a>

// class CreateConstellation extends React.Component {
//   renderNew() {
    
//     const component = (
//       <ModalButton label="Add Constellation" className="button button--primary">
//         <NewDocContainer collection={Constellations} label="Add Constellation" methodName="constellations.create"/>
//       </ModalButton>
//     )
    
//     return !!this.props.currentUser ? component : "";
//   }

//   render() {

//     return (
//       <div className="constellations">
//         {this.renderNew()}
//         {this.props.results.map(constellation => <ConstellationSingle key={constellation._id} {...constellation} currentUser={this.props.currentUser}/>)}
//         {this.props.hasMore ? (this.props.ready ? <LoadMore {...this.props}/> : <p>Loading…</p>) : <p>No more constellations</p>}
//       </div>
//     )
//   }
// };

// export default CreateConstellation;
