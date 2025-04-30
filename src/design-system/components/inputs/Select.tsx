import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { BaseComponentProps, FieldVariant, SizeVariant } from "../types";
import { mergeSx } from "../../utils/styleUtils";

export type SelectOption = {
  value: string | number;
  label: string;
};

export interface SelectProps
  extends BaseComponentProps,
    Omit<MuiSelectProps, "variant" | "size"> {
  /**
   * Input label
   */
  label?: string;

  /**
   * Helper text to display below the select
   */
  helperText?: string;

  /**
   * Whether the select has an error
   */
  error?: boolean;

  /**
   * The options to display in the select
   */
  options?: SelectOption[];

  /**
   * The variant to use for the select
   * @default 'outlined'
   */
  variant?: FieldVariant;

  /**
   * The size of the select
   * @default 'medium'
   */
  size?: SizeVariant;

  /**
   * Callback fired when the value changes
   */
  onChange?: (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => void;
}

/**
 * Select component that wraps MUI Select with DemoCo design system styling
 */
const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options = [],
      variant = "outlined",
      size = "medium",
      sx,
      required,
      children,
      ...props
    },
    ref
  ) => {
    // Map our size variant to MUI's size prop
    const muiSize = size === "large" ? "medium" : size;

    const labelId = `${props.id || props.name}-label`;

    // Custom styling for our select
    const customSx = {
      minWidth: 120,
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: 2,
        },
      },
    };

    return (
      <FormControl
        ref={ref}
        variant={variant}
        size={muiSize}
        error={error}
        required={required}
        fullWidth={props.fullWidth}
        sx={mergeSx(customSx, sx)}
      >
        {label && <InputLabel id={labelId}>{label}</InputLabel>}
        <MuiSelect labelId={labelId} label={label} {...props}>
          {children ||
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </MuiSelect>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

Select.displayName = "Select";

export default Select;
