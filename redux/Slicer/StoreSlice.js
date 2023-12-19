import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllSectors = createAsyncThunk(
  "store/getSectors",
  async (headers, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      //   console.log(headers);
      const response = await axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/mysectors/",
        headers
      );
      //   console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      //   console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const getAllStores = createAsyncThunk(
  "store/getStores",
  async (headers, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/mystores/?sector",
        headers
      );
      // console.log(response)
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getMyOffers = createAsyncThunk(
  "store/getmyoffers",
  async (headers, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get(
        "https://forsa-staging.bit68.com/api/v1/stores/myoffers/",
        headers
      );
      // console.log(response)
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getMyServiceTypes = createAsyncThunk(
  "store/getmyservicetypes",
  async (headers, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await axios.get(
        "https://forsa-staging.bit68.com/api/v1/onetransaction/myservicetypes/",
        headers
      );
      // console.log(response)
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//////// initialState Value
const initialState = {
  sectorsData: [],
  storesData: [],
  myoffersData: [],
  myservicetypesData: [],
  loading: false,
  error: false,
};

const storeslice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSectors.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getAllSectors.fulfilled, (state, action) => {
        state.loading = false;
        state.sectorsData = action.payload;
      }),
      builder.addCase(getAllSectors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
      builder.addCase(getAllStores.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(getAllStores.fulfilled, (state, action) => {
        state.loading = false;
        state.storesData = action.payload;
      }),
      builder.addCase(getAllStores.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
      builder.addCase(getMyOffers.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(getMyOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.myoffersData = action.payload;
      }),
      builder.addCase(getMyOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
      builder.addCase(getMyServiceTypes.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(getMyServiceTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.myservicetypesData = action.payload;
      }),
      builder.addCase(getMyServiceTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default storeslice.reducer;
