export const SUCCESS = "SUCCESS";
export const REQUEST = "REQUEST";
export const FAILURE = "FAILURE";
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export function GetUserRequest() {
  return {
    type: GET_USERS_REQUEST,
    status: REQUEST
  };
}

export function GetUserSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    status: SUCCESS,
    userdata: data
  };
}

export function GetUserFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    status: FAILURE,
    usererror: error
  };
}

export function GetUser() {
  return async dispatch => {
    dispatch(GetUserRequest());
    try {
      const result = await fetch("https://api.github.com/users");
      const resultJson = await result.json();
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(GetUserSuccess(resultJson));
    } catch (e) {
      dispatch(GetUserFailure(e.message));
    }
  };
}
