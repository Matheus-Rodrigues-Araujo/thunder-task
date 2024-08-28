import { Meta, StoryObj } from "@storybook/react";
import { Brand } from "../components/brand";
import { ComponentProps } from "react";
// import { MemoryRouter } from "react-router-dom";

type StoryProps = ComponentProps<typeof Brand>;

const meta: Meta<StoryProps> = {
  title: "Components/Brand",
  component: Brand,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => {
    return <Brand {...args} />;
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => {
    return <Brand {...args} />;
  },
};
