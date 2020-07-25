import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerAuth from '../services/Auth/AuthReducer';
import reducerUser from '../services/User/UserReducer';


const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth: reducerAuth,
    user: reducerUser,
  });

const rootReducer = history => {
  return (state, action) => {
    return appReducer(history)(state, action);
  };
};
export default rootReducer;
