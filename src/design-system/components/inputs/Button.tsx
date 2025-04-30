import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
  alpha,
  keyframes,
} from "@mui/material";
import { BaseComponentProps } from "../types";

// Define keyframes for loading spinner animation
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

/**
 * Hierarchy options for the Button component
 */
export type ButtonHierarchy = "primary" | "secondary";

/**
 * Additional props for the Button component
 */
export interface ButtonProps
  extends Omit<MuiButtonProps, "classes">,
    BaseComponentProps {
  /**
   * The hierarchy level of the button
   * @default 'primary'
   */
  hierarchy?: ButtonHierarchy;

  /**
   * Whether to make the button full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether to show a loading indicator
   * @default false
   */
  loading?: boolean;
}

/**
 * Custom styled Button with design system styles
 */
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "hierarchy" && prop !== "loading",
})<{ hierarchy?: ButtonHierarchy; loading?: boolean }>(
  ({ theme, hierarchy = "primary", variant = "contained", loading }) => ({
    borderRadius: 8,
    textTransform: "none",
    fontWeight: 600,
    boxShadow: "none",
    padding: "8px 16px",
    transition: "all 0.2s ease-in-out",
    position: "relative",

    // Primary hierarchy styling
    ...(hierarchy === "primary" && {
      ...(variant === "contained" && {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.25)}`,
        },
      }),

      ...(variant === "outlined" && {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
          borderColor: theme.palette.primary.dark,
        },
      }),

      ...(variant === "text" && {
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
        },
      }),
    }),

    // Secondary hierarchy styling
    ...(hierarchy === "secondary" && {
      ...(variant === "contained" && {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
          boxShadow: `0 4px 8px ${alpha(theme.palette.secondary.main, 0.25)}`,
        },
      }),

      ...(variant === "outlined" && {
        borderColor: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, 0.08),
          borderColor: theme.palette.secondary.dark,
        },
      }),

      ...(variant === "text" && {
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, 0.08),
        },
      }),
    }),

    // Disabled state
    "&.Mui-disabled": {
      opacity: 0.6,
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },

    // Loading state
    ...(loading && {
      opacity: 0.8,
      pointerEvents: "none",
    }),

    // Loading spinner styles
    "& .loading-spinner": {
      animation: `${spinAnimation} 1s linear infinite`,
    },
  })
);

/**
 * Button component with enhanced styling and accessibility
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  hierarchy = "primary",
  variant = "contained",
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  sx,
  ...props
}) => {
  // When loading is true, we should also disable the button
  const isDisabled = disabled || loading;

  // If loading, show a loading indicator
  const loadingProps = loading
    ? {
        startIcon: startIcon || (
          <span
            className="loading-spinner"
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              border: "2px solid currentColor",
              borderTopColor: "transparent",
              display: "inline-block",
              marginRight: "8px",
            }}
          />
        ),
      }
    : { startIcon, endIcon };

  return (
    <StyledButton
      variant={variant}
      hierarchy={hierarchy}
      loading={loading}
      disabled={isDisabled}
      sx={sx}
      {...loadingProps}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
