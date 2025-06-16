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
  Typography,
  List,
  ListItem,
  Pagination,
  Select,
  MenuItem,
  Box,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
import type {
  TableProps,
  TextInputProps,
  NumberInputProps,
  ComboBoxProps,
  DatePickerProps,
  RadioProps,
  SelectProps,
  SwitchProps,
  AlertProps,
  BadgeProps,
  MenuProps,
  CardProps,
  LinkProps,
  ButtonProps,
  ButtonIconProps,
  CheckboxProps,
  CheckboxGroupProps,
  RadioGroupProps,
  OrderedListProps,
  UnorderedListProps,
  HeadingProps,
  PaginationControlProps,
  TextProps,
  CalendarPreviewProps,
} from "@gusto/embedded-react-sdk";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref,
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
      inputRef={inputRef as React.Ref<HTMLInputElement> | undefined}
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
      inputRef={inputRef as React.Ref<HTMLInputElement> | undefined}
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      inputRef={inputRef as React.Ref<any>}
      slotProps={{
        input: {
          ref: inputRef as React.Ref<HTMLInputElement> | undefined,
        },
      }}
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
}: CheckboxGroupProps) {
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
          inputRef={inputRef as React.Ref<HTMLInputElement> | undefined}
          onBlur={onBlur as GenericBlurHandler}
          {...props}
        />
      )}
    />
  );
}

// MUI DatePicker adapter component using @mui/x-date-pickers
function MUIDatePicker({
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
  ...props
}: DatePickerProps) {
  const inputId = id || `date-picker-${name}`;

  return (
    <MuiDatePicker
      label={label}
      value={value || null}
      onChange={onChange}
      disabled={isDisabled}
      slotProps={{
        textField: {
          id: inputId,
          name,
          inputRef: inputRef as React.Ref<HTMLInputElement> | undefined,
          error: isInvalid,
          helperText: isInvalid ? errorMessage : description,
          required: isRequired,
          placeholder,
          onBlur: onBlur as GenericBlurHandler,
          sx: { width: "100%" },
          ...props,
        },
      }}
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
            inputRef={inputRef as React.Ref<HTMLInputElement> | undefined}
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
}: RadioGroupProps) {
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
      inputRef={inputRef as React.Ref<HTMLInputElement> | undefined}
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
            inputRef={inputRef as React.Ref<HTMLInputElement> | undefined}
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

function Card({ children, menu }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #EAEAEA",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <div style={{ width: "100%" }}>{children}</div>
        {menu && <div>{menu}</div>}
      </div>
    </div>
  );
}

function Breadcrumbs() {
  return null;
}

// Add these type definitions before the Table component
interface TableData {
  key: string;
  content: React.ReactNode;
}

interface TableRow {
  key: string;
  data: TableData[];
}

// Update the Table component with MUI components
function Table({
  headers,
  rows,
  className,
  "aria-label": ariaLabel,
  emptyState,
  ...props
}: TableProps) {
  return (
    <TableContainer component={Paper} className={className}>
      <MuiTable aria-label={ariaLabel} {...props}>
        <TableHead>
          <TableRow>
            {headers?.map((header: TableData) => (
              <TableCell key={header.key}>{header.content}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.length === 0 && emptyState ? (
            <TableRow>
              <TableCell colSpan={headers?.length} align="center">
                {emptyState}
              </TableCell>
            </TableRow>
          ) : (
            rows?.map((row: TableRow) => (
              <TableRow key={row.key}>
                {row.data.map((cell: TableData) => (
                  <TableCell key={cell.key}>{cell.content}</TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

// OrderedList adapter component
function MUIOrderedList({ items, className, ...props }: OrderedListProps) {
  return (
    <List
      component="ol"
      className={`list ordered-list ${className || ""}`}
      {...props}
    >
      {items.map((item, index) => (
        <ListItem key={index} className="list-item">
          {item}
        </ListItem>
      ))}
    </List>
  );
}

// UnorderedList adapter component
function MUIUnorderedList({ items, className, ...props }: UnorderedListProps) {
  return (
    <List
      component="ul"
      className={`list unordered-list ${className || ""}`}
      {...props}
    >
      {items.map((item, index) => (
        <ListItem key={index} className="list-item">
          {item}
        </ListItem>
      ))}
    </List>
  );
}

// Heading adapter component
function MUIHeading({
  as: Component,
  styledAs,
  textAlign,
  children,
}: HeadingProps) {
  const levelStyles = styledAs ?? Component;

  const fontSizes = {
    h1: "2rem",
    h2: "1.5rem",
    h3: "1.25rem",
    h4: "1rem",
    h5: "0.875rem",
    h6: "0.75rem",
  };

  const headingStyles = {
    textAlign: textAlign,
    fontSize: fontSizes[levelStyles],
  };

  return (
    <Typography component={Component} style={headingStyles}>
      {children}
    </Typography>
  );
}

// PaginationControl adapter component
function MUIPaginationControl({
  currentPage,
  totalPages,
  handleFirstPage,
  handlePreviousPage,
  handleNextPage,
  handleLastPage,
  handleItemsPerPageChange,
}: PaginationControlProps) {
  if (totalPages < 2) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          defaultValue="5"
          onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
          size="small"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => {
          if (page === 1) handleFirstPage();
          else if (page === totalPages) handleLastPage();
          else if (page > currentPage) handleNextPage();
          else if (page < currentPage) handlePreviousPage();
        }}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}

// Text adapter component
function MUIText({
  as: Component,
  size = "md",
  textAlign,
  weight,
  className,
  children,
}: TextProps) {
  const fontSizes = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  };

  const fontWeights = {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  };

  const textStyles = {
    margin: 0,
    fontSize: fontSizes[size],
    lineHeight: "1.5",
    textAlign: textAlign,
    fontWeight: weight ? fontWeights[weight] : fontWeights.regular,
  };

  return (
    <Typography component={Component} style={textStyles} className={className}>
      {children}
    </Typography>
  );
}

// CalendarPreview adapter component
function MUICalendarPreview({
  dateRange,
  highlightDates,
}: CalendarPreviewProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Box>
      <Typography variant="subtitle1">
        <strong>{dateRange.label}:</strong>
      </Typography>
      <Typography variant="body1">
        {formatDate(dateRange.start)} - {formatDate(dateRange.end)}
      </Typography>

      {highlightDates && highlightDates.length > 0 && (
        <List>
          {highlightDates.map((highlight, index) => (
            <ListItem key={index}>
              <Typography variant="body2">
                {formatDate(highlight.date)} - {highlight.label}
              </Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
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
  Breadcrumbs: Breadcrumbs,
  Table: Table,
  OrderedList: MUIOrderedList,
  UnorderedList: MUIUnorderedList,
  Heading: MUIHeading,
  PaginationControl: MUIPaginationControl,
  Text: MUIText,
  CalendarPreview: MUICalendarPreview,
};
