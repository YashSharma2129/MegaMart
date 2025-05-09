import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  currency: 'INR',
  notifications: {
    email: true,
    push: true,
    sms: false
  },
  accessibility: {
    fontSize: 'normal',
    contrast: 'normal',
    reducedMotion: false
  }
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    toggleNotification: (state, action) => {
      const { type, enabled } = action.payload;
      state.notifications[type] = enabled;
    },
    updateAccessibility: (state, action) => {
      state.accessibility = { ...state.accessibility, ...action.payload };
    }
  }
});

export const { setLanguage, setCurrency, toggleNotification, updateAccessibility } = settingsSlice.actions;
export default settingsSlice.reducer;
