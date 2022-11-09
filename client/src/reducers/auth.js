import * as actionType from "../constants/actionTypes";

import jwt_decode from "jwt-decode";

const createOrGetUser = async (response) => {
  const decoded = jwt_decode(response);
  return decoded;
};

const authReducer = async (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      const profile = await createOrGetUser(action?.data.result);
      console.log(profile);
      localStorage.setItem("profile", JSON.stringify({ ...profile }));
      console.log(action?.data);
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
