import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../../../../src/design-system/components/data-display/Badge";

const meta = {
  title: "Design System/Data Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label text to display inside the badge",
    },
    status: {
      control: { type: "select" },
      options: ["info", "warning", "error", "success", "default"],
      description: "The status variant that determines the badge color",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the badge",
    },
    rounded: {
      control: "boolean",
      description: "Whether to make the badge rounded or squared",
    },
    bordered: {
      control: "boolean",
      description: "Whether to add a border to the badge",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default",
    status: "default",
  },
};

export const Info: Story = {
  args: {
    label: "Information",
    status: "info",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    status: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    status: "error",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    status: "success",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    size: "large",
  },
};

export const Squared: Story = {
  args: {
    label: "Not Rounded",
    rounded: false,
  },
};

export const Bordered: Story = {
  args: {
    label: "Bordered",
    bordered: true,
  },
};
