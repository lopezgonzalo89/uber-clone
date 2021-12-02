import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (draftState, { payload }) => {
      draftState.origin = payload;
    },
    setDestination: (draftState, { payload }) => {
      draftState.destination = payload;
    },
    setTravelTimeInformation: (draftState, { payload }) => {
      draftState.travelTimeInformation = payload;
    },
  },
});

// Actions
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
