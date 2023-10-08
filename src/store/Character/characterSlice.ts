import { createSlice } from "@reduxjs/toolkit";

export const CharacterSlice = createSlice({
    name: 'Default',
    initialState: {
        defaultText: "Default Text",
    },
    reducers: {
        setChangeCharacter: (state, action) => {
            return {
                ...state,
                defaultText: action.payload,
            }
        }
    },
})

export const {
    setChangeCharacter,
} = CharacterSlice.actions

export default CharacterSlice.reducer