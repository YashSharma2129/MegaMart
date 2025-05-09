import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  primaryColor: '#0076CE',
  customColors: {
    primary: '#0076CE',
    secondary: '#1A2340',
    accent: '#FF5E4D'
  },
  fonts: {
    main: 'Poppins',
    headings: 'Inter'
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
      state.customColors.primary = action.payload;
    },
    setCustomColors: (state, action) => {
      state.customColors = { ...state.customColors, ...action.payload };
    },
    setFonts: (state, action) => {
      state.fonts = { ...state.fonts, ...action.payload };
    }
  }
});

export const { toggleThemeMode, setPrimaryColor, setCustomColors, setFonts } = themeSlice.actions;
export default themeSlice.reducer;
