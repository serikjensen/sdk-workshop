import React from "react";
import { Employee, GustoProvider } from "@gusto/embedded-react-sdk";
import { theme as demoCoTheme } from "../../design-system";

// Define the ThemeColor type to match what the SDK expects
type RGB = `rgb(${string})`;
type RGBA = `rgba(${string})`;
type HEX = `#${string}`;
type HSL = `hsl(${string})`;
type HSLA = `hsla(${string})`;
type VAR = `var(${string})`;
type ThemeColor = RGB | RGBA | HEX | HSL | HSLA | VAR | "transparent";

// Helper function to ensure font sizes are strings
const toFontSize = (size: string | number | undefined): string => {
  if (typeof size === "number") {
    return `${size}px`;
  }
  return String(size || "1rem");
};

const Theming: React.FC = () => {
  return (
    <GustoProvider
      config={{ baseUrl: "https://sdkdemo.gusto.com" }}
      theme={{
        rootFS: "16",
        colors: {
          gray: {
            100: "red" as ThemeColor,
            200: demoCoTheme.palette.grey[200] as ThemeColor,
            300: demoCoTheme.palette.grey[300] as ThemeColor,
            400: demoCoTheme.palette.grey[400] as ThemeColor,
            500: demoCoTheme.palette.grey[500] as ThemeColor,
            600: demoCoTheme.palette.grey[600] as ThemeColor,
            700: demoCoTheme.palette.grey[700] as ThemeColor,
            800: demoCoTheme.palette.grey[800] as ThemeColor,
            900: demoCoTheme.palette.grey[900] as ThemeColor,
            1000: demoCoTheme.palette.grey[900] as ThemeColor,
          },
          error: {
            100: demoCoTheme.palette.error.light as ThemeColor,
            500: demoCoTheme.palette.error.main as ThemeColor,
            800: demoCoTheme.palette.error.dark as ThemeColor,
          },
          warning: {
            100: demoCoTheme.palette.warning.main as ThemeColor,
            500: demoCoTheme.palette.warning.main as ThemeColor,
            700: demoCoTheme.palette.warning.dark as ThemeColor,
            800: "#fff" as ThemeColor,
          },
          success: {
            100: demoCoTheme.palette.success.light as ThemeColor,
            400: demoCoTheme.palette.success.light as ThemeColor,
            500: demoCoTheme.palette.success.main as ThemeColor,
            800: demoCoTheme.palette.success.dark as ThemeColor,
          },
          orange: {
            800: "#e65100" as ThemeColor,
          },
        },
        typography: {
          font: demoCoTheme.typography.fontFamily,
          textColor: demoCoTheme.palette.text.primary as ThemeColor,
          datePickerErrorTextColor: demoCoTheme.palette.error
            .main as ThemeColor,
          defaultLineHeight: "1.5",
          fontSize: {
            small: toFontSize(demoCoTheme.typography.caption.fontSize),
            regular: toFontSize(demoCoTheme.typography.body1.fontSize),
            medium: toFontSize(demoCoTheme.typography.h6.fontSize),
          },
          fontWeight: {
            regular: 400,
            medium: 500,
          },
          disabledTextColor: demoCoTheme.palette.text.disabled as ThemeColor,
          headings: {
            1: toFontSize(demoCoTheme.typography.h1.fontSize),
            2: toFontSize(demoCoTheme.typography.h2.fontSize),
            3: toFontSize(demoCoTheme.typography.h3.fontSize),
            4: toFontSize(demoCoTheme.typography.h4.fontSize),
            5: toFontSize(demoCoTheme.typography.h5.fontSize),
            6: toFontSize(demoCoTheme.typography.h6.fontSize),
          },
        },
        button: {
          fontSize: toFontSize(demoCoTheme.typography.button.fontSize),
          fontWeight: 500,
          borderWidth: "1px",
          borderRadius: "8px",
          textStyle: "none",
          paddingX: "16px",
          paddingY: "8px",
          shadow: demoCoTheme.shadows[1],
          primary: {
            color: demoCoTheme.palette.primary.contrastText as ThemeColor,
            bg: demoCoTheme.palette.primary.main as ThemeColor,
            borderColor: demoCoTheme.palette.primary.main as ThemeColor,
            hoverBg: demoCoTheme.palette.primary.dark as ThemeColor,
            hoverColor: demoCoTheme.palette.primary.contrastText as ThemeColor,
            disabledBg: (demoCoTheme.palette.action?.disabled ||
              "rgba(0, 0, 0, 0.12)") as ThemeColor,
            focusColor: demoCoTheme.palette.primary.contrastText as ThemeColor,
          },
          secondary: {
            color: demoCoTheme.palette.secondary.main as ThemeColor,
            bg: "#fff",
            borderColor: demoCoTheme.palette.secondary.main as ThemeColor,
            hoverBg: "#fff",
            hoverColor: demoCoTheme.palette.secondary.main as ThemeColor,
            disabledBg: (demoCoTheme.palette.action?.disabled ||
              "rgba(0, 0, 0, 0.12)") as ThemeColor,
            focusColor: demoCoTheme.palette.secondary
              .contrastText as ThemeColor,
          },
          tertiary: {
            color: demoCoTheme.palette.primary.main as ThemeColor,
            bg: "transparent" as ThemeColor,
            borderColor: "transparent" as ThemeColor,
            hoverBg: "rgba(0, 0, 0, 0.04)" as ThemeColor,
            hoverColor: demoCoTheme.palette.primary.dark as ThemeColor,
            disabledBg: "transparent" as ThemeColor,
            focusColor: demoCoTheme.palette.primary.main as ThemeColor,
          },
        },
        input: {
          fontSize: toFontSize(demoCoTheme.typography.body1.fontSize),
          textColor: demoCoTheme.palette.text.primary as ThemeColor,
          borderColor: demoCoTheme.palette.grey[300] as ThemeColor,
          borderWidth: "1px",
          background: demoCoTheme.palette.background.paper as ThemeColor,
          paddingX: "16px",
          paddingY: "8px",
          height: "40px",
          labelFontSize: toFontSize(demoCoTheme.typography.body2.fontSize),
          labelColor: demoCoTheme.palette.text.secondary as ThemeColor,
          labelFontWeight: 400,
          disabled: {
            color: demoCoTheme.palette.text.disabled as ThemeColor,
            border: demoCoTheme.palette.grey[200] as ThemeColor,
            bg: (demoCoTheme.palette.action?.disabledBackground ||
              "rgba(0, 0, 0, 0.04)") as ThemeColor,
          },
          hovered: {
            borderColor: demoCoTheme.palette.primary.main as ThemeColor,
          },
          placeholderColor: demoCoTheme.palette.text.secondary as ThemeColor,
          descriptionColor: demoCoTheme.palette.text.secondary as ThemeColor,
          disabledColor: demoCoTheme.palette.text.disabled as ThemeColor,
        },
        badge: {
          success: {
            backgroundColor: "#e8f5e9",
            color: "#1b5e20",
            borderColor: "#a5d6a7",
          },
        },
      }}
    >
      <Employee.OnboardingFlow
        companyId="demo"
        onEvent={(eventType, eventData) => {
          console.log(eventType, eventData);
        }}
      />
    </GustoProvider>
  );
};

export default Theming;

export interface GThemeBadge {
  success: {
    color: string;
    backgroundColor: string;
    borderColor: string;
  };
  fontSize: string;
  fontWeight: number;
  borderWidth: string;
  borderRadius: string;
  paddingX: string;
  paddingY: string;
}
