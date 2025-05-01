import type {
  FocusEventHandler,
  Ref,
  InputHTMLAttributes,
  ReactNode,
  FieldsetHTMLAttributes,
  AnchorHTMLAttributes,
  RefObject,
  SelectHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";
export type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean;
};

export interface BaseFieldProps<T = HTMLElement> {
  label?: string;
  description?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  shouldVisuallyHideLabel?: boolean;
  id?: string;
  name?: string;
  onBlur?: FocusEventHandler<T>;
}

interface OptionWithDescription {
  value: string;
  label: string;
  description?: string;
}

export interface LocalCheckboxGroupProps
  extends BaseFieldProps<HTMLInputElement> {
  value?: string[];
  options: Array<OptionWithDescription>;
  onChange?: (value: string[]) => void;
}

export interface LocalRadioGroupProps extends BaseFieldProps<HTMLInputElement> {
  value?: string;
  options: Array<OptionWithDescription>;
  onChange?: (value: string) => void;
}

export interface SharedFieldLayoutProps extends DataAttributes {
  description?: ReactNode;
  errorMessage?: string;
  isRequired?: boolean;
  label: ReactNode;
  shouldVisuallyHideLabel?: boolean;
}

export interface InternalFieldLayoutProps {
  children: React.ReactNode;
  htmlFor: string;
  errorMessageId: string;
  descriptionId: string;
  className?: string;
}

export interface FieldLayoutProps
  extends SharedFieldLayoutProps,
    InternalFieldLayoutProps {}

export interface TextInputProps
  extends SharedFieldLayoutProps,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      "name" | "id" | "placeholder" | "className" | "type" | "onBlur"
    > {
  inputRef?: Ref<HTMLInputElement>;
  value?: string;
  onChange?: (value: string) => void;
  isInvalid?: boolean;
  isDisabled?: boolean;
}

export interface NumberInputProps
  extends SharedFieldLayoutProps,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      "min" | "max" | "name" | "id" | "placeholder" | "className"
    > {
  format?: "currency" | "decimal" | "percent";
  currencyDisplay?:
    | keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry
    | undefined;
  inputRef?: Ref<HTMLInputElement>;
  value?: number;
  isInvalid?: boolean;
  isDisabled?: boolean;
  onChange?: (value: number) => void;
  onBlur?: FocusEventHandler<HTMLElement>;
}

export interface DatePickerProps
  extends SharedFieldLayoutProps,
    Pick<InputHTMLAttributes<HTMLInputElement>, "className" | "id" | "name"> {
  inputRef?: Ref<HTMLInputElement>;
  isDisabled?: boolean;
  isInvalid?: boolean;
  onChange?: (value: Date | null) => void;
  onBlur?: (e: FocusEvent) => void;
  label: string;
  value?: Date | null;
  placeholder?: string;
}

export type CheckboxGroupOption = {
  label: React.ReactNode;
  value: string;
  isDisabled?: boolean;
  description?: React.ReactNode;
};

export interface CheckboxGroupProps
  extends SharedFieldLayoutProps,
    Pick<FieldsetHTMLAttributes<HTMLFieldSetElement>, "className"> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  options: Array<CheckboxGroupOption>;
  value?: string[];
  onChange?: (value: string[]) => void;
  inputRef?: Ref<HTMLInputElement>;
}

export interface ComboBoxOption {
  label: string;
  value: string;
}

export interface ComboBoxProps
  extends SharedFieldLayoutProps,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      "className" | "id" | "name" | "placeholder"
    > {
  isDisabled?: boolean;
  isInvalid?: boolean;
  label: string;
  onChange?: (value: string) => void;
  onBlur?: (e: FocusEvent) => void;
  options: ComboBoxOption[];
  value?: string;
  inputRef?: Ref<HTMLInputElement>;
}

export interface CardProps {
  /** Callback function when the card is selected */
  onSelect?: (checked: boolean) => void;
  /** Content to be displayed inside the card */
  children: ReactNode;
  /** Optional menu component to be displayed on the right side of the card */
  menu?: ReactNode;
  /** Additional CSS class name */
  className?: string;
}

export type SharedHorizontalFieldLayoutProps = SharedFieldLayoutProps;

export type HorizontalFieldLayoutProps = SharedHorizontalFieldLayoutProps &
  InternalFieldLayoutProps;

export interface RadioProps
  extends SharedHorizontalFieldLayoutProps,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      "name" | "id" | "className" | "onBlur"
    > {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  inputRef?: Ref<HTMLInputElement>;
  isInvalid?: boolean;
  isDisabled?: boolean;
}

export type RadioGroupOption = {
  label: React.ReactNode;
  value: string;
  isDisabled?: boolean;
  description?: React.ReactNode;
};

export interface RadioGroupProps
  extends SharedFieldLayoutProps,
    Pick<FieldsetHTMLAttributes<HTMLFieldSetElement>, "className"> {
  isInvalid?: boolean;
  isDisabled?: boolean;
  options: Array<RadioGroupOption>;
  value?: string;
  onChange?: (value: string) => void;
  inputRef?: Ref<HTMLInputElement>;
}

export interface SwitchProps
  extends SharedHorizontalFieldLayoutProps,
    Pick<InputHTMLAttributes<HTMLInputElement>, "name" | "id"> {
  onBlur?: (e: FocusEvent) => void;
  onChange?: (checked: boolean) => void;
  value?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  isInvalid?: boolean;
  isDisabled?: boolean;
  className?: string;
  label: string;
}

export type LinkProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  | "href"
  | "target"
  | "rel"
  | "download"
  | "children"
  | "className"
  | "id"
  | "onKeyDown"
  | "onKeyUp"
  | "aria-label"
  | "aria-labelledby"
  | "aria-describedby"
  | "title"
>;

export interface MenuItem extends DataAttributes {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
  href?: string;
}

export interface MenuProps extends DataAttributes {
  triggerRef?: RefObject<Element | null>;
  items?: MenuItem[];
  isOpen?: boolean;
  onClose?: () => void;
  "aria-label": string;
}

export interface CheckboxProps
  extends SharedHorizontalFieldLayoutProps,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      "name" | "id" | "className" | "onBlur"
    > {
  value?: boolean;
  onChange?: (value: boolean) => void;
  inputRef?: Ref<HTMLInputElement>;
  isInvalid?: boolean;
  isDisabled?: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends SharedFieldLayoutProps,
    Pick<SelectHTMLAttributes<HTMLSelectElement>, "id" | "name" | "className"> {
  isDisabled?: boolean;
  isInvalid?: boolean;
  label: string;
  onChange?: (value: string) => void;
  onBlur?: (e: FocusEvent) => void;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  inputRef?: Ref<HTMLButtonElement>;
}

type ButtonFocusHandler = (e: FocusEvent) => void;

export interface ButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    | "name"
    | "id"
    | "className"
    | "type"
    | "onClick"
    | "onKeyDown"
    | "onKeyUp"
    | "aria-label"
    | "aria-labelledby"
    | "aria-describedby"
    | "form"
    | "title"
    | "tabIndex"
  > {
  ref?: Ref<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "tertiary" | "icon";
  isError?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  onBlur?: ButtonFocusHandler;
  onFocus?: ButtonFocusHandler;
}

export type ButtonIconProps = Omit<ButtonProps, "variant"> & {
  "aria-label": string;
};

export interface AlertProps {
  /** The variant of the alert */
  status?: "info" | "success" | "warning" | "error";
  /** The label text for the alert */
  label: string;
  /** Optional children to be rendered inside the alert */
  children?: ReactNode;
  /** Optional custom icon component to override the default icon */
  icon?: ReactNode;
}

export interface BadgeProps
  extends Pick<
    HTMLAttributes<HTMLSpanElement>,
    "className" | "id" | "aria-label"
  > {
  children: ReactNode;
  status?: "success" | "warning" | "error" | "info";
}
