import * as actions from '../actions/actionTypes';

const initialArticleState = {
  createdUser: {},
  error: [],
  loading: false
};

export default (state = initialArticleState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_LOADING:
      return {
        ...state,
        loading: true,
        error: [],
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
