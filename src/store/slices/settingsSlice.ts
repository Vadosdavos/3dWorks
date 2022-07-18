import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface settingsState {
  bgColor: string,
  deckColor: string,
  wheelsColor: string,
  deckTexture: string,
  target: string
}

const initialState: settingsState = {
  bgColor: 'white',
  deckColor: '',
  wheelsColor: '',
  deckTexture: '',
  target: 'deckColor'
}

export const settingsSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload
    },
    changeDeckColor: (state, action: PayloadAction<string>) => {
      state.deckColor = action.payload
    },
    changeWheelsColor: (state, action: PayloadAction<string>) => {
      state.wheelsColor = action.payload
    },
    changeDeckTexture: (state, action: PayloadAction<string>) => {
      state.deckTexture = action.payload;
    },
    changeTarget: (state, action: PayloadAction<string>) => {
      state.target = action.payload
    },
  },
})

export const { changeBgColor, changeDeckColor, changeDeckTexture, changeTarget, changeWheelsColor } = settingsSlice.actions

export default settingsSlice.reducer