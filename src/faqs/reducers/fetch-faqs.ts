import { createAsyncThunk } from "@/utils/helpers/redux";
import {loadFAQs, loadFAQsSuccess, loadFAQsFailure} from "@/faqs/reducers";

export const fetchFAQs = createAsyncThunk(
  "faqs/fetchFAQs",
  async (_, { dispatch }) => {
    dispatch(loadFAQs());
    try {
      const response = await fetch("/api/v1/instance/faqs");
      if (!response.ok) {
        throw new Error("Failed to fetch FAQs");
      }
      const faqs = await response.json();
      dispatch(loadFAQsSuccess(faqs));
      return faqs;
    } catch (error: any) {
      dispatch(loadFAQsFailure(error.message));
      throw error;
    }
  }
);