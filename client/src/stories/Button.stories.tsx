import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Button } from "../components/button";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  title: "Component/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Secundary: Story = {
  args: {
    buttonText: "Hello",
    variant: "secondary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
