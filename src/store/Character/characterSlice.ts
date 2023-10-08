import { createSlice } from "@reduxjs/toolkit";

export const ChatacterSlice = createSlice({
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
} = ChatacterSlice.actions

export default ChatacterSlice.reducer