"use client"
import React from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode'; 
import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';



const ThemeToggleButton = () => {
  const { mode, setMode } = useColorScheme();

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  
  return (
    <IconButton 
        onClick={toggleTheme} 
        color="inherit" 
        sx={{ mr: 1 }}
        title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggleButton;