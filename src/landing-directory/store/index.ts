// store/store.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LandingDirectory, createLandingDirectory, initialState as landingDirectoryInitialState } from "../types/landing-directory";
import { Account } from "@/types";

export interface DirectoryState {
  isLoading: boolean;
  accounts: Omit<Account, 'emojis'|'fields'|'roles'>[];
  error: string | null;
}

const initialState: DirectoryState = {
  isLoading: true,
  accounts: [],
  error: null,
};

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {
    loadDirectory: (state) => {
      state.isLoading = true;
    },
    loadDirectorySuccess: (state, action: PayloadAction<Account[]>) => {
      state.isLoading = false;
      state.accounts = action.payload;
    },
    loadDirectoryFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loadDirectory, loadDirectorySuccess, loadDirectoryFailure } =
  directorySlice.actions;

export const directoryReducer = directorySlice.reducer;

const store = configureStore({
  reducer: {
    directory: directorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;