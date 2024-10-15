import { appUpdatesReducer } from "@/app/reducers/appUpdates";
import { faqsReducer } from "@/faqs/reducers";
import type { IContainer } from "bottlejs";
import {
  configureStore,
  createSlice,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { directoryReducer } from '@/landing-directory/store'

export const initReducers = (container: IContainer) => combineReducers({
  appUpdated: appUpdatesReducer,
  faqs: faqsReducer,
  directory: directoryReducer
});

interface LoadingState {
  [key: string]: boolean; // Dynamic keys for each state slice
}

const loadingSlice = createSlice({
  name: "loading",
  initialState: {} as LoadingState,
  reducers: {
    setLoading: (
      state,
      action: PayloadAction<{ sliceName: string; isLoading: boolean }>
    ) => {
      state[action.payload.sliceName] = action.payload.isLoading;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

const rootReducer = {
  faqs: faqsReducer,
  directory: directoryReducer, // For example, as previously defined
  loading: loadingSlice.reducer,
};

const rootStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export default rootStore;