// [build] library: 'shadcn'
import { Loader2, Mail } from "lucide-react";

import { Button } from "../components/ui/button";

const meta = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Base = {
  render: (args: unknown) => <Button {...args}>Button</Button>,
  args: {},
};
export const Outline = {
  render: (args: unknown) => <Button {...args}>Button</Button>,
  args: {
    variant: "outline",
  },
};
export const Ghost = {
  render: (args: unknown) => <Button {...args}>Button</Button>,
  args: {
    variant: "ghost",
  },
};
export const Secondary = {
  render: (args: unknown) => <Button {...args}>Button</Button>,
  args: {
    variant: "secondary",
  },
};
export const Link = {
  render: (args: unknown) => <Button {...args}>Button</Button>,
  args: {
    variant: "link",
  },
};
export const Loading = {
  render: (args: unknown) => (
    <Button {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>
  ),
  args: {
    variant: "outline",
  },
};
export const WithIcon = {
  render: (args: unknown) => (
    <Button {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email Button
    </Button>
  ),
  args: {
    variant: "secondary",
  },
};
