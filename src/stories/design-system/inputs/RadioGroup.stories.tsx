import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "../../../../src/design-system/components/inputs/RadioGroup";

const meta = {
  title: "Design System/Inputs/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the radio buttons",
    },
    direction: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      description: "The layout direction of the radio buttons",
    },
    error: {
      control: "boolean",
      description: "Whether to show the radio group in an error state",
    },
    required: {
      control: "boolean",
      description: "Whether the radio group is required",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default options for most stories
const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
  },
};

export const Horizontal: Story = {
  args: {
    label: "Choose an option",
    options: defaultOptions,
    value: "option1",
    direction: "horizontal",
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
    helperText: "This is helper text for the radio group",
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: "Choose an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
    ],
    value: "option1",
  },
};
