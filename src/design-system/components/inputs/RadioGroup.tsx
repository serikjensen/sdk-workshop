import React from "react";
import {
  Radio,
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { BaseComponentProps, SizeVariant } from "../types";

export type RadioOption = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export interface RadioGroupProps
  extends BaseComponentProps,
    MuiRadioGroupProps {
  /**
   * The label for the radio group
   */
  label?: React.ReactNode;

  /**
   * The size of the radio buttons
   * @default 'medium'
   */
  size?: SizeVariant;

  /**
   * Helper text to display below the radio group
   */
  helperText?: string;

  /**
   * Whether the radio group has an error
   */
  error?: boolean;

  /**
   * Whether the radio group is required
   */
  required?: boolean;

  /**
   * The options for the radio group
   */
  options?: RadioOption[];

  /**
   * The layout direction of the radio buttons
   * @default 'vertical'
   */
  direction?: "horizontal" | "vertical";
}

/**
 * RadioGroup component that wraps MUI RadioGroup with DemoCo design system styling
 */
const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  size = "medium",
  helperText,
  error,
  required,
  options = [],
  direction = "vertical",
  sx,
  children,
  ...props
}) => {
  // Map our size variant to MUI's size prop
  const muiSize = size === "large" ? "medium" : size;

  // Custom styling for our radio buttons
  const radioSx: SxProps<Theme> = {
    "&.Mui-checked": {
      color: (theme: Theme) => theme.palette.primary.main,
    },
  };

  // Custom styling for the radio group as a separate object
  const groupStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: direction === "horizontal" ? "row" : "column",
  };

  // Merge sx props safely
  const mergedSx: SxProps<Theme> = { ...groupStyles, ...(sx || {}) };

  return (
    <FormControl error={error} required={required}>
      {label && <FormLabel>{label}</FormLabel>}
      <MuiRadioGroup {...props} sx={mergedSx}>
        {children ||
          options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              label={option.label}
              disabled={option.disabled}
              control={<Radio size={muiSize} sx={radioSx} />}
            />
          ))}
      </MuiRadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
