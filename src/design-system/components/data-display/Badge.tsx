import React from "react";
import { Box, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { BaseComponentProps } from "../types";

export type BadgeStatus = "info" | "warning" | "error" | "success" | "default";

export interface BadgeProps extends BaseComponentProps {
  /**
   * The label text to display inside the badge
   */
  label: string;

  /**
   * The status variant that determines the badge color
   * @default 'default'
   */
  status?: BadgeStatus;

  /**
   * The size of the badge
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";

  /**
   * Whether to make the badge rounded or squared
   * @default true
   */
  rounded?: boolean;

  /**
   * Whether to add a border to the badge
   * @default false
   */
  bordered?: boolean;
}

/**
 * Badge component for displaying status indicators with mature colors
 */
const Badge: React.FC<BadgeProps> = ({
  label,
  status = "default",
  size = "medium",
  rounded = true,
  bordered = false,
  sx,
  ...props
}) => {
  // Map size to padding and font size
  const sizeMap = {
    small: {
      py: 0.25,
      px: 1,
      fontSize: "0.75rem",
    },
    medium: {
      py: 0.5,
      px: 1.5,
      fontSize: "0.875rem",
    },
    large: {
      py: 0.75,
      px: 2,
      fontSize: "1rem",
    },
  };

  // Status-based styling with more mature, muted colors
  const getStatusStyles = (theme: Theme) => {
    // More mature color palette
    const matureColors = {
      default: {
        bg: theme.palette.grey[100],
        text: theme.palette.grey[700],
        border: theme.palette.grey[300],
      },
      info: {
        bg: "#e3f2fd", // More muted blue
        text: "#0d47a1", // Deeper blue
        border: "#90caf9", // Muted blue border
      },
      warning: {
        bg: "#fff8e1", // Softer amber
        text: "#b26a00", // Deeper amber
        border: "#ffe082", // Muted amber border
      },
      error: {
        bg: "#fbe9e7", // Softer red
        text: "#b71c1c", // Deeper red
        border: "#ffab91", // Muted red border
      },
      success: {
        bg: "#e8f5e9", // Softer green
        text: "#1b5e20", // Deeper green
        border: "#a5d6a7", // Muted green border
      },
    };

    const colors = matureColors[status];

    return {
      backgroundColor: colors.bg,
      color: colors.text,
      borderColor: colors.border,
    };
  };

  // Combine all styles
  const badgeSx = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    lineHeight: 1,
    ...sizeMap[size],
    borderRadius: rounded ? "16px" : "4px",
    border: bordered ? "1px solid" : "none",
    whiteSpace: "nowrap",
  };

  return (
    <Box
      sx={(theme) => ({
        ...badgeSx,
        ...getStatusStyles(theme),
        ...(sx as object),
      })}
      {...props}
    >
      <Typography
        variant="inherit"
        component="span"
        sx={{
          fontSize: "inherit",
          fontWeight: "inherit",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default Badge;
