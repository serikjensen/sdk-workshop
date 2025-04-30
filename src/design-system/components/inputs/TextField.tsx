import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { BaseComponentProps, FieldVariant, SizeVariant } from "../types";
import { mergeSx } from "../../utils/styleUtils";

// Interface extending MuiTextFieldProps with our custom properties
export interface TextFieldProps
  extends BaseComponentProps,
    Omit<MuiTextFieldProps, "variant" | "size"> {
  /**
   * The variant to use for the TextField
   * @default 'outlined'
   */
  variant?: FieldVariant;

  /**
   * The size of the TextField
   * @default 'medium'
   */
  size?: SizeVariant;

  /**
   * Start adornment for the text field
   */
  startAdornment?: React.ReactNode;

  /**
   * End adornment for the text field
   */
  endAdornment?: React.ReactNode;
}

/**
 * TextField component that wraps MUI TextField with DemoCo design system styling
 */
const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      variant = "outlined",
      size = "medium",
      startAdornment,
      endAdornment,
      sx,
      error,
      helperText,
      ...props
    },
    ref
  ) => {
    // Map our size variant to MUI's size prop
    const muiSize = size === "large" ? "medium" : size;

    // Custom styling for our text field
    const customSx = {
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: 2,
        },
      },
      // Add more custom styling here
    };

    return (
      <MuiTextField
        ref={ref}
        variant={variant}
        size={muiSize}
        error={error}
        helperText={helperText}
        sx={mergeSx(customSx, sx)}
        InputProps={{
          ...props.InputProps,
          startAdornment: startAdornment
            ? startAdornment
            : props.InputProps?.startAdornment,
          endAdornment: endAdornment
            ? endAdornment
            : props.InputProps?.endAdornment,
        }}
        {...props}
      />
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
