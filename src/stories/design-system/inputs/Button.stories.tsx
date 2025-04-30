import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../../src/design-system/components/inputs/Button";

const meta = {
  title: "Design System/Inputs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    hierarchy: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "The hierarchy level of the button",
    },
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
      description: "The variant of the button",
    },
    loading: {
      control: "boolean",
      description: "Whether to show a loading indicator",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hierarchy: "primary",
    variant: "contained",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    hierarchy: "secondary",
    variant: "contained",
    children: "Secondary Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};
