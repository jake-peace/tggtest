import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DetailsState {
  firstName: string;
}

const initialState: DetailsState = {
  firstName: "",
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    saveFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
  },
});

export const { saveFirstName } = detailsSlice.actions;

export default detailsSlice.reducer;
