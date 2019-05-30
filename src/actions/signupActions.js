import { toast } from 'react-toastify';
import * as actions from './actionTypes';
import { signup } from '../api';
import  history  from '../helpers/history'


export const authStart = () => ({
  type: actions.AUTH_LOADING
});


export const authSucceeded = (user) => ({
  type: actions.AUTH_SUCCEEDED,
  user
});

export const authFailed = error => ({
  type: actions.AUTH_FAILED,
  error
});

export const signUp = (user) => (dispatch) => {
  dispatch(authStart());
  const body = JSON.stringify(user);
  signup(body)
    .then((response) => {
      dispatch(authSucceeded(response.data.user));
      toast.success('Your account has successfully been created');
      history.push('/login')
    })
    .catch((err) => {
      console.log(err.response.data.error)
      dispatch(authFailed(err));
      toast.error(err.response.data.error);
    });
};