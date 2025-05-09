import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Switch, Select, MenuItem, Button, Divider } from '@mui/material';
import { toggleThemeMode, setPrimaryColor, setCustomColors } from '../../redux/slices/themeSlice';

const colorOptions = [
  { name: 'Blue', value: '#0076CE' },
  { name: 'Purple', value: '#6B46C1' },
  { name: 'Green', value: '#38A169' },
  { name: 'Red', value: '#E53E3E' },
];

export default function ThemeCustomizer() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>Theme Settings</Typography>
      <Divider sx={{ my: 2 }} />
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>Dark Mode</Typography>
        <Switch
          checked={theme.mode === 'dark'}
          onChange={() => dispatch(toggleThemeMode())}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>Primary Color</Typography>
        <Select
          value={theme.primaryColor}
          onChange={(e) => dispatch(setPrimaryColor(e.target.value))}
          fullWidth
          size="small"
        >
          {colorOptions.map((color) => (
            <MenuItem key={color.value} value={color.value}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: color.value }} />
                {color.name}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Button
        variant="outlined"
        fullWidth
        onClick={() => dispatch(setCustomColors({
          primary: '#0076CE',
          secondary: '#1A2340',
          accent: '#FF5E4D'
        }))}
      >
        Reset to Default
      </Button>
    </Box>
  );
}
