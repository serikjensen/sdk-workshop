import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../../../../src/design-system/components/inputs/TextField";
import {
  Search as SearchIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";

const meta = {
  title: "Design System/Inputs/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled", "standard"],
      description: "The variant to use for the TextField",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the TextField",
    },
    disabled: {
      control: "boolean",
      description: "Whether the TextField is disabled",
    },
    error: {
      control: "boolean",
      description: "Whether to show the TextField in an error state",
    },
    required: {
      control: "boolean",
      description: "Whether the TextField is required",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the TextField should take up the full width",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Text Field",
    placeholder: "Enter text...",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled Text Field",
    placeholder: "Enter text...",
    variant: "filled",
  },
};

export const Small: Story = {
  args: {
    label: "Small Text Field",
    placeholder: "Enter text...",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large Text Field",
    placeholder: "Enter text...",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Text Field",
    placeholder: "Enter text...",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Error Text Field",
    placeholder: "Enter text...",
    error: true,
    helperText: "This field is required",
  },
};

export const Required: Story = {
  args: {
    label: "Required Text Field",
    placeholder: "Enter text...",
    required: true,
  },
};

export const WithStartAdornment: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    startAdornment: <SearchIcon fontSize="small" />,
  },
};

export const WithEndAdornment: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password...",
    type: "password",
    endAdornment: <VisibilityIcon fontSize="small" />,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Text Field",
    placeholder: "Enter text...",
    fullWidth: true,
  },
};
