import * as actionType from "../constants/actionTypes";


const authReducer = async (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify(action?.data?.result));
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
