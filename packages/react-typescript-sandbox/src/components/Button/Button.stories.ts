import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    label: 'Button'
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true
  },
};

export const Secondary: Story = {
  args: {
  },
};

export const Large: Story = {
  args: {
    size: "large"
  },
};

export const Small: Story = {
  args: {
    size: "small"
  },
};

Small.argTypes = {
  backgroundColor: {
    control: "inline-radio",
    options: ["red", "blue", "green"],
  },
};
