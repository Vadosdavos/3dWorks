import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface colorState {
  bgColor?: string,
  deckColor: string
}

const initialState: colorState = {
  bgColor: 'white',
  deckColor: '',
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload
    },
    changeDeckColor: (state, action: PayloadAction<string>) => {
      state.deckColor = action.payload
    },
  },
})

export const { changeBgColor, changeDeckColor } = colorSlice.actions

export default colorSlice.reducer