import type { Meta, StoryObj } from "@storybook/react";
import { ProfileForm } from "@/components/Form";

const meta = {
  title: "Form",
  component: ProfileForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileForm>;

export default meta;
type Story = StoryObj<typeof ProfileForm>;

export const Primary: Story = {
  args: {
    label: "hello",
  },
};
