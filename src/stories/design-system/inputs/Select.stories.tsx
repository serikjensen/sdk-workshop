import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../../../src/design-system/components/inputs/Select";
import { MenuItem } from "@mui/material";

const meta = {
  title: "Design System/Inputs/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outlined", "filled", "standard"],
      description: "The variant to use for the select",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the select",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
    error: {
      control: "boolean",
      description: "Whether to show the select in an error state",
    },
    required: {
      control: "boolean",
      description: "Whether the select is required",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the select should take up the full width",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default options for most stories
const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

export const Default: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
  },
};

export const Filled: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    variant: "filled",
  },
};

export const Standard: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    variant: "standard",
  },
};

export const Small: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    error: true,
    helperText: "This field has an error",
  },
};

export const Required: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    helperText: "This is helper text for the select",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    fullWidth: true,
  },
};

export const WithCustomChildren: Story = {
  render: (args) => (
    <Select label="Choose an option" value="option1" {...args}>
      <MenuItem value="option1">Custom Option 1</MenuItem>
      <MenuItem value="option2">Custom Option 2</MenuItem>
      <MenuItem value="option3">Custom Option 3</MenuItem>
      <MenuItem value="option4" disabled>
        Disabled Option
      </MenuItem>
    </Select>
  ),
};
