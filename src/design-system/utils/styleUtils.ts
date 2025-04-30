import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

/**
 * Utility function to merge SX props
 */
export const mergeSx = (
  ...sxProps: (SxProps<Theme> | undefined)[]
): SxProps<Theme> => {
  return sxProps.filter(Boolean) as SxProps<Theme>;
};

/**
 * Helper for applying conditional styles
 */
export const conditionalSx = (
  condition: boolean,
  sx: SxProps<Theme>
): SxProps<Theme> | undefined => {
  return condition ? sx : undefined;
};

/**
 * Spacing helpers to maintain consistent spacing
 */
export const spacing = {
  xs: 1, // 8px
  sm: 2, // 16px
  md: 3, // 24px
  lg: 4, // 32px
  xl: 6, // 48px
};

/**
 * Common styles for form elements
 */
export const formStyles = {
  field: {
    mb: spacing.sm,
    width: "100%",
  },
  fieldGroup: {
    mb: spacing.md,
  },
  helperText: {
    mt: 0.5,
  },
  label: {
    mb: 1,
  },
};

/**
 * Common styles for layout elements
 */
export const layoutStyles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gridContainer: {
    display: "grid",
    gap: spacing.md,
  },
};
