import { Modal, ModalProps } from "@components/Modal";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = args => <Modal {...args}/>;

export const Default = Template.bind({});