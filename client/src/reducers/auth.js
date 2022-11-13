import * as actionType from "../constants/actionTypes";


const authReducer = async (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify(action?.data));
      console.log(action?.data,'from auth reducer');
      return { ...state, authData: action.data, loading: false, errors: null };

    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
      
    default:
      return state;
  }
};

export default authReducer;
