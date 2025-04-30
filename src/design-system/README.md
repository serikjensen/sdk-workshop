# DemoCo Design System

The DemoCo Design System is a collection of reusable components, design tokens, and guidelines that help create consistent user interfaces across DemoCo applications.

## Architecture

The design system follows a component-based architecture that wraps Material UI components with DemoCo-specific styling and functionality.

```
design-system/
├── components/       # UI components organized by category
│   ├── inputs/       # Form input components (TextField, Select, etc.)
│   ├── layout/       # Layout components
│   ├── feedback/     # Feedback components (Alert, Snackbar, etc.)
│   ├── data-display/ # Data display components (Table, List, etc.)
│   ├── navigation/   # Navigation components (Tabs, Breadcrumbs, etc.)
│   ├── surfaces/     # Surface components (Card, Paper, etc.)
│   └── types.ts      # Common types and interfaces
├── theme/            # Theme configuration
│   └── theme.ts      # MUI theme customization
├── utils/            # Utility functions
│   └── styleUtils.ts # Style utility functions
└── index.ts          # Main export file
```

## Usage

### Importing components

```jsx
import { TextField, Select, Button } from '../design-system';

// Use components
<TextField label="Name" />
<Select label="Category" options={[...]} />
<Button hierarchy="primary">Submit</Button>
```

### Using the theme

```jsx
import { ThemeProvider } from "@mui/material";
import { theme } from "../design-system";

// Wrap your app with the theme provider
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```

## Component Documentation

The design system components are documented using Storybook, which provides an interactive environment to explore and test components.

### Running Storybook

To run the Storybook documentation locally:

```bash
npm run storybook
```

This will start Storybook on http://localhost:6006 by default.

### Component Stories

Each component in the design system has corresponding stories in the `src/stories/design-system` directory. The stories demonstrate different variants, props, and usage examples.

The story files are organized mirroring the component directory structure:

```
src/stories/design-system/
├── inputs/           # Stories for input components
├── data-display/     # Stories for data display components
└── navigation/       # Stories for navigation components
```

### Adding a New Component Story

When creating a new component, add a corresponding story file following this pattern:

1. Create a new file in the appropriate directory: `src/stories/design-system/[category]/[ComponentName].stories.tsx`
2. Import the component and define its stories
3. Include examples of different variants and states

Basic template for a component story:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "../../../../src/design-system/components/category/ComponentName";

const meta = {
  title: "Design System/Category/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Define controls for component props
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};

// Add more variants as needed
```

## Components

### Input Components

- **TextField**: Text input component with various variants and states
- **Select**: Dropdown selection component with options
- **Checkbox**: Checkbox component with label support
- **RadioGroup**: Radio button group component with horizontal/vertical layout options
- **Button**: Action button with primary/secondary hierarchy options and loading state support

### Data Display Components

- **Badge**: Status indicator component with various states (info, success, warning, error)

### Navigation Components

- **Menu**: Enhanced dropdown menu with larger border radius and separators between items
  - Supports icons alongside menu items
  - Supports descriptions for additional context
  - Includes automatic dividers between items

More components will be added as needed.

## Theme

The theme defines:

- Color palette (primary, secondary, error, warning, info, success)
- Typography styles
- Spacing scale
- Border radius variants
- Shadow levels
- Component style overrides

## Design Tokens

- **Colors**: Color variables for consistent usage throughout the application
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale based on 8px units
- **Border radius**: Standardized corner roundness values
- **Shadows**: Elevation levels for creating depth

## Contribution Guidelines

When creating new components:

1. Follow the established patterns and naming conventions
2. Wrap Material UI components whenever possible
3. Use the theme variables for styling
4. Document props and examples
5. Add proper TypeScript typings
6. Maintain accessibility standards
7. Create Storybook stories for the component

## Future Plans

- Add more complex components
- Expand component documentation
- Add visual regression testing
- Integrate with a design token system
