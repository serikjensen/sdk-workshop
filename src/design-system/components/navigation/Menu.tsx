import React from "react";
import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { BaseComponentProps } from "../types";

/**
 * Custom styled MUI Menu with larger border radius and other enhancements
 */
const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 8,
    boxShadow: `0px 5px 15px ${alpha(theme.palette.common.black, 0.15)}`,
    border: `1px solid ${theme.palette.divider}`,
  },
  "& .MuiMenu-list": {
    padding: "8px 0",
  },
  "& .MuiMenuItem-root": {
    fontSize: "0.875rem",
    padding: "10px 16px",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
    "&.Mui-selected": {
      backgroundColor: alpha(theme.palette.primary.main, 0.12),
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
      },
    },
    "&:not(:last-child)": {
      borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
    },
  },
}));

export interface MenuProps
  extends Omit<MuiMenuProps, "classes">,
    BaseComponentProps {
  /**
   * Whether to show dividers between menu items
   * @default true
   */
  showDividers?: boolean;
}

/**
 * Enhanced Menu component with custom styling
 */
export const Menu: React.FC<MenuProps> = ({
  children,
  showDividers = true,
  sx,
  ...props
}) => {
  // Create modified children with dividers if requested
  const modifiedChildren = React.Children.toArray(children).map(
    (child, index, array) => {
      if (
        index < array.length - 1 &&
        showDividers &&
        React.isValidElement(child) &&
        child.type === MenuItem
      ) {
        return (
          <React.Fragment key={`menu-item-${index}`}>{child}</React.Fragment>
        );
      }
      return child;
    }
  );

  return (
    <StyledMenu sx={sx} {...props}>
      {modifiedChildren}
    </StyledMenu>
  );
};

/**
 * Custom styled MenuItem with enhanced styling
 */
const StyledMenuItem = styled(MuiMenuItem)(() => ({
  fontSize: "0.875rem",
  padding: "10px 16px",
}));

export interface MenuItemProps
  extends Omit<MuiMenuItemProps, "classes">,
    BaseComponentProps {
  /**
   * Whether to show an icon
   */
  icon?: React.ReactNode;

  /**
   * Secondary text to display
   */
  description?: string;
}

/**
 * Enhanced MenuItem component with better styling and optional icon/description
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  icon,
  description,
  sx,
  ...props
}) => {
  return (
    <StyledMenuItem
      sx={{
        display: "flex",
        flexDirection: description ? "column" : "row",
        alignItems: description ? "flex-start" : "center",
        ...sx,
      }}
      {...props}
    >
      {icon && (
        <span style={{ marginRight: 8, display: "flex", alignItems: "center" }}>
          {icon}
        </span>
      )}
      <div>
        <div>{children}</div>
        {description && (
          <div
            style={{
              fontSize: "0.75rem",
              opacity: 0.7,
              marginTop: 4,
            }}
          >
            {description}
          </div>
        )}
      </div>
    </StyledMenuItem>
  );
};

export default {
  Menu,
  MenuItem,
};
