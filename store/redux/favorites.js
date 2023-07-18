import { createSlice } from "@reduxjs/toolkit";

//createSlice requires 3 objects (name, initial state, reducers )
const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      //every reducers will get latest state as input. No need to use ...state since createSlice takes care of it
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;
//need to export the reducer (not reducers but it is reducer since we are exporting one whole reducer)
