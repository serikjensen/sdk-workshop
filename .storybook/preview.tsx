import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/design-system";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // Enable table of contents for docs
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
