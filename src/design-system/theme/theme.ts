import {
  createTheme,
  Theme,
  ThemeOptions,
  PaletteOptions,
} from "@mui/material/styles";

// DemoCo color palette
const colors = {
  primary: {
    main: "#1a4b8c", // Dark blue
    light: "#3b6eb4",
    dark: "#002f6c",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#4dabf5", // Light blue
    light: "#80dfff",
    dark: "#007bc2",
    contrastText: "#ffffff",
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#ffffff",
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#ffffff",
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#ffffff",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  background: {
    default: "#ffffff",
    paper: "#ffffff",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
};

// Border radius sizes
const borderRadius = {
  none: 0,
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 16,
  circle: "50%",
};

// Spacing
const spacing = (factor: number) => `${8 * factor}px`;

// Font families
const fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
].join(",");

// Text variants
const typography = {
  fontFamily,
  h1: {
    fontSize: "2.5rem",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "-0.01562em",
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "0em",
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "0.00735em",
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "0em",
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.57,
    letterSpacing: "0.00714em",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
  },
  button: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 2.66,
    letterSpacing: "0.08333em",
  },
};

// Shadows
const shadows = [
  "none",
  "0px 2px 1px -1px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.07),0px 1px 3px 0px rgba(0,0,0,0.06)",
  "0px 3px 1px -2px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.07),0px 1px 5px 0px rgba(0,0,0,0.06)",
  "0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.07),0px 1px 8px 0px rgba(0,0,0,0.06)",
  "0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.07),0px 1px 10px 0px rgba(0,0,0,0.06)",
  "0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.07),0px 1px 14px 0px rgba(0,0,0,0.06)",
  "0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.07),0px 1px 18px 0px rgba(0,0,0,0.06)",
  "0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.07),0px 2px 16px 1px rgba(0,0,0,0.06)",
  "0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.07),0px 3px 14px 2px rgba(0,0,0,0.06)",
  "0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.07),0px 3px 16px 2px rgba(0,0,0,0.06)",
  "0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.07),0px 4px 18px 3px rgba(0,0,0,0.06)",
  "0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.07),0px 4px 20px 3px rgba(0,0,0,0.06)",
  "0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.07),0px 5px 22px 4px rgba(0,0,0,0.06)",
  "0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.07),0px 5px 24px 4px rgba(0,0,0,0.06)",
  "0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.07),0px 5px 26px 4px rgba(0,0,0,0.06)",
  "0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.07),0px 6px 28px 5px rgba(0,0,0,0.06)",
  "0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.07),0px 6px 30px 5px rgba(0,0,0,0.06)",
  "0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.07),0px 6px 32px 5px rgba(0,0,0,0.06)",
  "0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.07),0px 7px 34px 6px rgba(0,0,0,0.06)",
  "0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.07),0px 7px 36px 6px rgba(0,0,0,0.06)",
  "0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.07),0px 8px 38px 7px rgba(0,0,0,0.06)",
  "0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.07),0px 8px 40px 7px rgba(0,0,0,0.06)",
  "0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.07),0px 8px 42px 7px rgba(0,0,0,0.06)",
  "0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.07),0px 9px 44px 8px rgba(0,0,0,0.06)",
  "0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.07),0px 9px 46px 8px rgba(0,0,0,0.06)",
];

// Custom component overrides
const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        padding: "8px 16px",
        "&:hover": {
          boxShadow: shadows[2],
        },
      },
      contained: {
        boxShadow: shadows[1],
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: borderRadius.medium,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary.main,
            borderWidth: 2,
          },
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
        boxShadow: shadows[1],
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.medium,
      },
    },
  },
};

// Combine everything into theme options
const themeOptions: ThemeOptions = {
  palette: colors as PaletteOptions,
  typography,
  shadows: shadows as Theme["shadows"],
  components,
  shape: {
    borderRadius: borderRadius.medium,
  },
};

// Create and export the theme
const theme = createTheme(themeOptions);

export default theme;
export { colors, borderRadius, spacing, fontFamily };
