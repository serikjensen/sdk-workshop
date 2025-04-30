import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../../src/design-system/components/inputs/Checkbox";

const meta = {
  title: "Design System/Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is in an indeterminate state",
    },
    error: {
      control: "boolean",
      description: "Whether to show the checkbox in an error state",
    },
    required: {
      control: "boolean",
      description: "Whether the checkbox is required",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: "Unchecked Checkbox",
    checked: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate Checkbox",
    indeterminate: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Checkbox",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large Checkbox",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked Checkbox",
    disabled: true,
    checked: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "With Helper Text",
    helperText: "This is helper text for the checkbox",
  },
};

export const WithError: Story = {
  args: {
    label: "With Error",
    error: true,
    helperText: "This field has an error",
  },
};

export const Required: Story = {
  args: {
    label: "Required Checkbox",
    required: true,
  },
};
