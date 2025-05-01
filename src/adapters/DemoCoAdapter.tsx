import type React from "react";
import {
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Switch as MuiSwitch,
  Autocomplete,
  Alert as MuiAlert,
  IconButton,
  CircularProgress,
  Link as MuiLink,
  type AutocompleteRenderInputParams,
} from "@mui/material";
import {
  Button,
  TextField as DSTextField,
  Checkbox,
  RadioGroup as DSRadioGroup,
  Select as DSSelect,
  Badge as DSBadge,
  Menu as DSMenu,
  MenuItem as DSMenuItem,
} from "../design-system";
import type { TextInputProps } from "./types";
import type { NumberInputProps } from "./types";
import type { ComboBoxProps } from "./types";
import type { CheckboxProps } from "./types";
import type { DatePickerProps } from "./types";
import type { RadioProps } from "./types";
import type { SelectProps } from "./types";
import type { SwitchProps } from "./types";
import type { ButtonIconProps, ButtonProps } from "./types";
import type { AlertProps } from "./types";
import type { BadgeProps } from "./types";
import type { MenuProps } from "./types";
import type { CardProps } from "./types";
import type { LinkProps } from "./types";
import type { LocalCheckboxGroupProps, LocalRadioGroupProps } from "./types";

// Custom type for blurring to fix type compatibility issues
type GenericBlurHandler = (e: unknown) => void;

// MUI Alert adapter component
function MUIAlert({ label, children, status = "info", icon }: AlertProps) {
  const severity =
    status === "error"
      ? "error"
      : status === "warning"
      ? "warning"
      : status === "success"
      ? "success"
      : "info";

  return (
    <MuiAlert severity={severity} icon={icon || undefined} sx={{ mb: 2 }}>
      <div>
        <strong>{label}</strong>
        {children}
      </div>
    </MuiAlert>
  );
}

// Design System Button adapter component
function MUIButton({
  variant = "primary",
  isError = false,
  isLoading = false,
  isDisabled = false,
  children,
  onClick,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFocus,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onBlur,
  ...props
}: ButtonProps) {
  // Map variant from our API to MUI
  const muiVariant =
    variant === "primary"
      ? ("contained" as const)
      : variant === "secondary"
      ? ("outlined" as const)
      : ("text" as const);

  const color = isError ? ("error" as const) : ("primary" as const);

  return (
    <Button
      variant={muiVariant}
      color={color}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      startIcon={isLoading ? <CircularProgress size={20} /> : undefined}
      {...props}
    >
      {children}
    </Button>
  );
}

// ButtonIcon adapter component
function MUIButtonIcon({
  isError = false,
  isLoading = false,
  isDisabled = false,
  children,
  onClick,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFocus,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onBlur,
  "aria-label": ariaLabel,
  ...props
}: ButtonIconProps) {
  const color = isError ? ("error" as const) : ("primary" as const);

  return (
    <IconButton
      color={color}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {isLoading ? <CircularProgress size={20} /> : children}
    </IconButton>
  );
}

// Design System TextInput adapter component
function MUITextInput({
  label,
  description,
  errorMessage,
  isRequired,
  isDisabled,
  isInvalid,
  id,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  inputRef,
  shouldVisuallyHideLabel,
  ...props
}: TextInputProps) {
  const inputId = id || `text-input-${name}`;

  return (
    <DSTextField
      id={inputId}
      name={name}
      inputRef={inputRef}
      value={value || ""}
      placeholder={placeholder}
      disabled={isDisabled}
      error={isInvalid}
      helperText={isInvalid ? errorMessage : description}
      label={shouldVisuallyHideLabel ? undefined : label}
      required={isRequired}
      onChange={(e) => {
        if (onChange && e.target) {
          onChange(e.target.value);
        }
      }}
      onBlur={onBlur as GenericBlurHandler}
      fullWidth
      variant="outlined"
      {...props}
    />
  );
}

// Design System NumberInput adapter component
function MUINumberInput({
  label,
  description,
  errorMessage,
  isRequired,
  isDisabled,
  isInvalid,
  id,
  name,
  value,
  min,
  max,
  placeholder,
  onChange,
  onBlur,
  inputRef,
  shouldVisuallyHideLabel,
  ...props
}: NumberInputProps) {
  const inputId = id || `number-input-${name}`;

  return (
    <DSTextField
      id={inputId}
      name={name}
      inputRef={inputRef}
      value={value !== undefined ? value.toString() : ""}
      placeholder={placeholder}
      disabled={isDisabled}
      error={isInvalid}
      helperText={isInvalid ? errorMessage : description}
      label={shouldVisuallyHideLabel ? undefined : label}
      required={isRequired}
      onChange={(e) => {
        if (onChange && e.target) {
          onChange(parseFloat(e.target.value));
        }
      }}
      onBlur={onBlur as GenericBlurHandler}
      fullWidth
      variant="outlined"
      type="number"
      inputProps={{
        min,
        max,
      }}
      {...props}
    />
  );
}

// Design System Checkbox adapter component
function MUICheckbox({
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description,
  errorMessage,
  isRequired,
  isDisabled,
  isInvalid,
  id,
  name,
  value,
  onChange,
  onBlur,
  inputRef,
  ...props
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${name}`;

  return (
    <Checkbox
      id={checkboxId}
      name={name}
      checked={value || false}
      onChange={(e) => {
        if (onChange && e.target) {
          onChange(e.target.checked);
        }
      }}
      onBlur={onBlur as GenericBlurHandler}
      inputRef={inputRef}
      disabled={isDisabled}
      error={isInvalid}
      helperText={isInvalid ? errorMessage : undefined}
      label={label}
      required={isRequired}
      {...props}
    />
  );
}

// Design System CheckboxGroup adapter component
function MUICheckboxGroup({
  label,
  description,
  errorMessage,
  isRequired,
  isDisabled,
  isInvalid,
  shouldVisuallyHideLabel,
  value = [],
  options,
  onChange,
}: LocalCheckboxGroupProps) {
  // Using FormControl from MUI since we don't have a CheckboxGroup in design system
  return (
    <FormControl error={isInvalid} required={isRequired}>
      {!shouldVisuallyHideLabel && <FormLabel>{label}</FormLabel>}
      {shouldVisuallyHideLabel && (
        <FormLabel className="visually-hidden">{label}</FormLabel>
      )}
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={value.includes(option.value)}
                onChange={(checked) => {
                  if (onChange) {
                    const newValue = checked
                      ? [...value, option.value]
                      : value.filter((v: string) => v !== option.value);
                    onChange(newValue);
                  }
                }}
                disabled={isDisabled}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      {description && !isInvalid && (
        <FormHelperText>{description}</FormHelperText>
      )}
      {isInvalid && errorMessage && (
        <FormHelperText error>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
}

// MUI ComboBox adapter component
function MUIComboBox({
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errorMessage,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isRequired,
  isDisabled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInvalid,
  id,
  name,
  value,
  placeholder,
  options,
  onChange,
  onBlur,
  inputRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  shouldVisuallyHideLabel,
  ...props
}: ComboBoxProps) {
  const inputId = id || `combobox-${name}`;

  return (
    <Autocomplete
      id={inputId}
      options={options.map((option) => option.value)}
      value={value || null}
      onChange={(_: unknown, newValue: string | null) => {
        if (onChange) {
          onChange(newValue || "");
        }
      }}
      freeSolo
      disabled={isDisabled}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <DSTextField
          {...params}
          name={name}
          label={label}
          placeholder={placeholder}
          inputRef={inputRef}
          onBlur={onBlur as GenericBlurHandler}
          {...props}
        />
      )}
    />
  );
}

// HTML DatePicker adapter component (simple implementation)
function MUIDatePicker({
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errorMessage,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isRequired,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isDisabled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInvalid,
  id,
  name,
  value,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  placeholder,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange,
  onBlur,
  inputRef,
  ...props
}: DatePickerProps) {
  const inputId = id || `date-picker-${name}`;

  // Format date for HTML input if available
  const dateValue = value ? value.toISOString().split("T")[0] : "";

  return (
    <DSTextField
      sx={{
        width: "100%",
      }}
      id={inputId}
      name={name}
      type="date"
      value={dateValue}
      onChange={() => {}}
      inputRef={inputRef}
      onBlur={onBlur as GenericBlurHandler}
      label={label}
      {...props}
    />
  );
}

// Design System Radio adapter component
function MUIRadio({
  label,
  description,
  errorMessage,
  isRequired,
  isDisabled,
  isInvalid,
  id,
  name,
  value,
  onChange,
  onBlur,
  inputRef,
  shouldVisuallyHideLabel,
  ...props
}: RadioProps) {
  const radioId = id || `radio-${name}`;

  return (
    <FormControl error={isInvalid} required={isRequired}>
      <FormControlLabel
        control={
          <Checkbox
            id={radioId}
            name={name}
            checked={value || false}
            onChange={(event) => {
              if (onChange) {
                onChange(event.target.checked);
              }
            }}
            onBlur={onBlur as GenericBlurHandler}
            inputRef={inputRef}
            disabled={isDisabled}
            {...props}
          />
        }
        label={shouldVisuallyHideLabel ? undefined : label}
      />
      {description && !isInvalid && (
        <FormHelperText>{description}</FormHelperText>
      )}
      {isInvalid && errorMessage && (
        <FormHelperText error>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
}

// Design System RadioGroup adapter component
function MUIRadioGroup({
  label,
  isRequired,
  value = "",
  options,
  onChange,
}: LocalRadioGroupProps) {
  return (
    <DSRadioGroup
      label={label}
      options={options.map((option) => ({
        label: option.label,
        value: option.value,
        description: option.description,
      }))}
      value={value}
      onChange={(event) => {
        if (onChange) {
          onChange(event.target.value);
        }
      }}
      required={isRequired}
    />
  );
}

// Design System Select adapter component
function MUISelect({
  label,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  errorMessage,
  isRequired,
  isDisabled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInvalid,
  id,
  name,
  value,
  options,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  placeholder,
  onChange,
  onBlur,
  inputRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  shouldVisuallyHideLabel,
  ...props
}: SelectProps) {
  const selectId = id || `select-${name}`;

  return (
    <DSSelect
      id={selectId}
      name={name}
      value={value || ""}
      label={label}
      onChange={(event) => {
        if (onChange) {
          onChange(event.target.value);
        }
      }}
      onBlur={onBlur as GenericBlurHandler}
      inputRef={inputRef}
      options={options}
      disabled={isDisabled}
      required={isRequired}
      {...props}
    />
  );
}

// MUI Switch adapter component
function MUISwitch({
  label,
  description,
  errorMessage,
  isRequired,
  isDisabled,
  isInvalid,
  id,
  name,
  value,
  onChange,
  onBlur,
  inputRef,
  shouldVisuallyHideLabel,
  ...props
}: SwitchProps) {
  const switchId = id || `switch-${name}`;

  return (
    <FormControl error={isInvalid} required={isRequired}>
      <FormControlLabel
        control={
          <MuiSwitch
            id={switchId}
            name={name}
            checked={value || false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (onChange) {
                onChange(e.target.checked);
              }
            }}
            onBlur={onBlur as GenericBlurHandler}
            inputRef={inputRef}
            disabled={isDisabled}
            {...props}
          />
        }
        label={shouldVisuallyHideLabel ? undefined : label}
      />
      {description && !isInvalid && (
        <FormHelperText>{description}</FormHelperText>
      )}
      {isInvalid && errorMessage && (
        <FormHelperText error>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
}

function Menu({
  triggerRef,
  items,
  isOpen,
  onClose,
  "aria-label": ariaLabel,
}: MenuProps) {
  return (
    <DSMenu
      anchorEl={triggerRef?.current}
      open={!!isOpen}
      onClose={onClose}
      aria-label={ariaLabel}
    >
      {items?.map((item) => (
        <DSMenuItem key={item.label} onClick={item.onClick}>
          {item.label}
        </DSMenuItem>
      ))}
    </DSMenu>
  );
}

function Badge({ status, children, ...props }: BadgeProps) {
  return <DSBadge status={status} label={children} {...props} />;
}

function Link(props: LinkProps) {
  return <MuiLink {...props} />;
}

function Card({ children, menu, className }: CardProps) {
  return (
    <div className={`card ${className || ""}`}>
      <div className="card-content">
        <div className="card-main">{children}</div>
        {menu && <div className="card-menu">{menu}</div>}
      </div>
    </div>
  );
}

// Export the adapter object
export const DemoCoAdapter = {
  Alert: MUIAlert,
  Button: MUIButton,
  ButtonIcon: MUIButtonIcon,
  TextInput: MUITextInput,
  NumberInput: MUINumberInput,
  Checkbox: MUICheckbox,
  CheckboxGroup: MUICheckboxGroup,
  ComboBox: MUIComboBox,
  DatePicker: MUIDatePicker,
  Radio: MUIRadio,
  RadioGroup: MUIRadioGroup,
  Select: MUISelect,
  Switch: MUISwitch,
  Menu: Menu,
  Badge: Badge,
  Link: Link,
  Card: Card,
};
