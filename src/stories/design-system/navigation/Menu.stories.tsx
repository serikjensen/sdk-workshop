import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Menu,
  MenuItem,
} from "../../../../src/design-system/components/navigation/Menu";
import { Button } from "../../../../src/design-system/components/inputs/Button";
import {
  Print as PrintIcon,
  Download as DownloadIcon,
  VpnKey as VpnKeyIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import type { MenuProps } from "../../../../src/design-system/components/navigation/Menu";

// This is a wrapper component since Menu needs an anchor element
const MenuWrapper = (
  props: {
    showDividers?: boolean;
    children?: React.ReactNode;
  } & Omit<MenuProps, "open" | "anchorEl" | "onClose">
) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>Open Menu</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...props}
      >
        {props.children}
      </Menu>
    </div>
  );
};

const meta = {
  title: "Design System/Navigation/Menu",
  component: MenuWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showDividers: {
      control: "boolean",
      description: "Whether to show dividers between menu items",
    },
  },
} satisfies Meta<typeof MenuWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    showDividers: true,
    children: [
      <MenuItem key="1" onClick={() => console.log("Item 1 clicked")}>
        Menu Item 1
      </MenuItem>,
      <MenuItem key="2" onClick={() => console.log("Item 2 clicked")}>
        Menu Item 2
      </MenuItem>,
      <MenuItem key="3" onClick={() => console.log("Item 3 clicked")}>
        Menu Item 3
      </MenuItem>,
    ],
  },
};

export const WithIcons: Story = {
  args: {
    showDividers: true,
    children: [
      <MenuItem
        key="1"
        onClick={() => console.log("Print clicked")}
        icon={<PrintIcon fontSize="small" color="primary" />}
      >
        Print Profile
      </MenuItem>,
      <MenuItem
        key="2"
        onClick={() => console.log("Export clicked")}
        icon={<DownloadIcon fontSize="small" color="primary" />}
      >
        Export Data
      </MenuItem>,
      <MenuItem
        key="3"
        onClick={() => console.log("Password clicked")}
        icon={<VpnKeyIcon fontSize="small" color="primary" />}
      >
        Change Password
      </MenuItem>,
      <MenuItem
        key="4"
        onClick={() => console.log("Delete clicked")}
        icon={<DeleteIcon fontSize="small" color="error" />}
      >
        Delete Account
      </MenuItem>,
    ],
  },
};

export const WithDescriptions: Story = {
  args: {
    showDividers: true,
    children: [
      <MenuItem
        key="1"
        onClick={() => console.log("Print clicked")}
        icon={<PrintIcon fontSize="small" color="primary" />}
        description="Print your profile information"
      >
        Print Profile
      </MenuItem>,
      <MenuItem
        key="2"
        onClick={() => console.log("Export clicked")}
        icon={<DownloadIcon fontSize="small" color="primary" />}
        description="Download your data in CSV format"
      >
        Export Data
      </MenuItem>,
      <MenuItem
        key="3"
        onClick={() => console.log("Password clicked")}
        icon={<VpnKeyIcon fontSize="small" color="primary" />}
        description="Change your account password"
      >
        Change Password
      </MenuItem>,
      <MenuItem
        key="4"
        onClick={() => console.log("Delete clicked")}
        icon={<DeleteIcon fontSize="small" color="error" />}
        description="Delete your account permanently"
      >
        Delete Account
      </MenuItem>,
    ],
  },
};

export const WithoutDividers: Story = {
  args: {
    showDividers: false,
    children: [
      <MenuItem key="1" onClick={() => console.log("Item 1 clicked")}>
        Menu Item 1
      </MenuItem>,
      <MenuItem key="2" onClick={() => console.log("Item 2 clicked")}>
        Menu Item 2
      </MenuItem>,
      <MenuItem key="3" onClick={() => console.log("Item 3 clicked")}>
        Menu Item 3
      </MenuItem>,
    ],
  },
};
