import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FAQ, FAQs } from "../faq";

export interface FAQsState {
  isLoading: boolean;
  faqs: FAQ[];
  error: string | null;
}

const initialState: FAQsState = {
  isLoading: true,
  faqs: [],
  error: null,
};

const faqsSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {
    loadFAQs: (state) => {
      state.isLoading = true;
    },
    loadFAQsSuccess: (state, action: PayloadAction<FAQ[]>) => {
      state.isLoading = false;
      state.faqs = action.payload;
    },
    loadFAQsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loadFAQs, loadFAQsSuccess, loadFAQsFailure } =
  faqsSlice.actions;

export const faqsReducer = faqsSlice.reducer;

const store = configureStore({
  reducer: {
    faqs: faqsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;