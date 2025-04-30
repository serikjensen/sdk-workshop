import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

/**
 * Base component props interface with common properties
 * that should be available to all design system components
 */
export interface BaseComponentProps {
  /**
   * Custom classes to be applied to the component
   */
  className?: string;

  /**
   * Custom inline styles for the component
   */
  style?: React.CSSProperties;

  /**
   * MUI sx props for advanced styling
   */
  sx?: SxProps<Theme>;
}

/**
 * Base input component props
 */
export interface BaseInputProps extends BaseComponentProps {
  /**
   * Input name attribute
   */
  name?: string;

  /**
   * Label text for the input field
   */
  label?: string;

  /**
   * Placeholder text for the input
   */
  placeholder?: string;

  /**
   * Helper text to be displayed below the input
   */
  helperText?: string;

  /**
   * Error text to be displayed when validation fails
   */
  error?: boolean;

  /**
   * Whether the input is disabled
   */
  disabled?: boolean;

  /**
   * Whether the input is required
   */
  required?: boolean;

  /**
   * Whether the input is in a loading state
   */
  loading?: boolean;

  /**
   * Input value
   */
  value?: unknown;

  /**
   * Default value for uncontrolled components
   */
  defaultValue?: unknown;

  /**
   * Callback fired when the value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback fired when the input loses focus
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Callback fired when the input gets focus
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Size variants for components
 */
export type SizeVariant = "small" | "medium" | "large";

/**
 * Color variants that match our theme palette
 */
export type ColorVariant =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "default";

/**
 * Common field variants
 */
export type FieldVariant = "outlined" | "filled" | "standard";
