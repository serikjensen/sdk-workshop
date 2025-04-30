import type { Preview } from "@storybook/react";
import { withTheme } from "./decorators.jsx";
import "./global.css";

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
  decorators: [withTheme],
};

export default preview;
