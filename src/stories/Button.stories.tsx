import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '@components/Button';

export default {
  title: "Components",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = () => {
  return <div>
    <Button variant="primary"/><span style={{ marginRight: "5px" }}></span>
    <Button variant="secondary"/><span style={{ marginRight: "5px" }}></span>
    <Button variant="success"/><span style={{ marginRight: "5px" }}></span>
    <Button variant="cancel"/><span style={{ marginRight: "5px" }}></span>
  </div>
};

export const Buttons = Template.bind({});