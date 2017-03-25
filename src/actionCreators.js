const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
  return [ REQUEST, SUCCESS, FAILURE ].reduce((act, type) => {
    act[type] = `${base}_${type}`;
    return act;
  }, {});
}

export function action(type, payload = {}) {
  return { type, ...payload };
}

export function actionCreators(type) {
  return {
    request: (args) => action(type.REQUEST, { args }),
    success: (response) => action(type.SUCCESS, { response }),
    failure: (error) => action(type.FAILURE, { error }),
    types: type,
  };
}
