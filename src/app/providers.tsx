"use client";
import React from "react";
import darkTheme from "@/styles/themes/dark";
import lightTheme from "@/styles/themes/light";
import { useSession } from "next-auth/react";

import { SessionProvider } from "next-auth/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SideMenu from "@/components/SideMenu/SideMenu";

const theme = createTheme({
  colorSchemes: {
    light: lightTheme,
    dark: darkTheme,
  },
});

function ProvidersContent({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  return (
    <ThemeProvider theme={theme}>
      <div suppressHydrationWarning>
        {/* the CssBaseline caused random hydration issues.I didn`t find a better solution yet */}
        <CssBaseline />
      </div>
      {session && <SideMenu />}
      {children}
    </ThemeProvider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ProvidersContent>{children}</ProvidersContent>
    </SessionProvider>
  );
}
