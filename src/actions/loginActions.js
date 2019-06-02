import { toast } from 'react-toastify';
import * as actions from './actionTypes';
import { login } from '../api';
import history from '../helpers/history';


export const loginStart = () => ({
  type: actions.LOGIN_LOADING
});


export const loginSucceeded = user => ({
  type: actions.LOGIN_SUCCEEDED,
  user
});

export const loginFailed = error => ({
  type: actions.LOGIN_FAILED,
  error
});

export const logIn = user => (dispatch) => {
  dispatch(loginStart());
  const body = JSON.stringify(user);
  login(body)
    .then((response) => {
      dispatch(loginSucceeded(response.data.user));
      toast.success('Login Successful');
      history.push('/userprofile');
    })
    .catch((err) => {
      dispatch(loginFailed(err));
      toast.error(err.response.data.error);
    });
};
