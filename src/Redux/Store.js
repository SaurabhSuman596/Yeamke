import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./Reducers/auth.reducer";
import { homeVideoReducer } from "./Reducers/video.reducer";
import { relatedVideoReducer } from "./Reducers/video.reducer";
import { searchdVideoReducer } from "./Reducers/video.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideo: homeVideoReducer,
  relatedVideo: relatedVideoReducer,
  searchVideo: searchdVideoReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
