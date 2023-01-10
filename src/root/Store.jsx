import { configureStore } from "@reduxjs/toolkit";
import appstate from "../ReactReduxApp/Store/Reducer";

export const store = configureStore({
  reducer: {
    mainreducer: appstate,
  },
});
