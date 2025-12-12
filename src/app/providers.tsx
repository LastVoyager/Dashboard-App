'use client'
import React from "react"
import darkTheme from "@/styles/themes/dark"
import lightTheme from "@/styles/themes/light"

import { SessionProvider } from "next-auth/react"
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  colorSchemes: {
    light: lightTheme,  
    dark: darkTheme, 
  },
});


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}