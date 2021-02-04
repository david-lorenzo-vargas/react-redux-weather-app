import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

export {
  rootReducer,
  store,
};

export default store;
