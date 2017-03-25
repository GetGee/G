export default function getProjection(fieldNodes) {
  return fieldNodes.selectionSet.selections.reduce((projections, selection) => {
    projections[selection.name.value] = 1;
    return projections;
  }, {});
}
