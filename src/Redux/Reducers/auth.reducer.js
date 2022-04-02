import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOG_OUT,
  LOAD_PROFILE,
} from "../ActionType";

const initialState = {
  user: sessionStorage.getItem("yeamke-user")
    ? JSON.parse(sessionStorage.getItem("yeamke-user"))
    : null,
  loding: true,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case LOG_OUT:
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
};
