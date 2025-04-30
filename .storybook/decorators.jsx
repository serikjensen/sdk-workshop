import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/design-system";

export const withTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);
