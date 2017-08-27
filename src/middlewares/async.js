function easyVersion({ dispatch }) {
  return function(next) {
    return function(action) {
      next(action);
    };
  };
}

export default function({ dispatch }) {
  return next => action => {
    //console.log(action);
    // If action does not have payload or the payload does not have .then property
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // resolve the action's promise
    action.payload.then(response => {
      // create new action and replace the payload(it's a promise) with the response data
      const newAction = { ...action, payload: response};
      dispatch(newAction);
    });
  };
}
