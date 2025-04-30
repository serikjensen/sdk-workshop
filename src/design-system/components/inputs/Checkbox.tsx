import React from "react";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { BaseComponentProps, SizeVariant } from "../types";
import { mergeSx } from "../../utils/styleUtils";

export interface CheckboxProps
  extends BaseComponentProps,
    Omit<MuiCheckboxProps, "size"> {
  /**
   * The label for the checkbox
   */
  label?: React.ReactNode;

  /**
   * The size of the checkbox
   * @default 'medium'
   */
  size?: SizeVariant;

  /**
   * Helper text to display below the checkbox
   */
  helperText?: string;

  /**
   * Whether the checkbox has an error
   */
  error?: boolean;

  /**
   * Props to pass to the FormControlLabel component
   */
  FormControlLabelProps?: Partial<
    Omit<FormControlLabelProps, "control" | "label">
  >;
}

/**
 * Checkbox component that wraps MUI Checkbox with DemoCo design system styling
 */
const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      label,
      size = "medium",
      helperText,
      error,
      sx,
      FormControlLabelProps,
      ...props
    },
    ref
  ) => {
    // Map our size variant to MUI's size prop
    const muiSize = size === "large" ? "medium" : size;

    // Custom styling for our checkbox
    const customSx = {
      "&.Mui-checked": {
        color: (theme: Theme) => theme.palette.primary.main,
      },
    };

    const checkbox = (
      <MuiCheckbox
        ref={ref}
        size={muiSize}
        sx={mergeSx(customSx, sx)}
        {...props}
      />
    );

    if (!label) {
      return checkbox;
    }

    return (
      <FormControl error={error} required={props.required}>
        <FormControlLabel
          control={checkbox}
          label={label}
          {...FormControlLabelProps}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
