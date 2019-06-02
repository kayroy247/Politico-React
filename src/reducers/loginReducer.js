import * as actions from '../actions/actionTypes';

const initialState = {
  loggedInUser: {},
  error: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        loggedInUser: {}
      };
    case actions.LOGIN_SUCCEEDED:
      return {
        ...state,
        loading: false,
        loggedInUser: payload,
        error: []
      };
    case actions.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: state.error.concat(payload),
        loggedInUser: {}
      };
    default:
      return state;
  }
};
