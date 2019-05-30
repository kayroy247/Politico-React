import * as actions from '../actions/actionTypes';

const initialState = {
  createdUser: {},
  error: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_LOADING:
      return {
        ...state,
        loading: true,
        createdUser: {}
      };
    case actions.AUTH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        createdUser: payload,
        error: []
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: state.error.concat(payload),
        createdUser: {}
      };
    default:
      return state;
  }
};
