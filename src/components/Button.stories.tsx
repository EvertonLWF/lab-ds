import { Button, ButtonProps } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Components/Button",
	component: Button,
	args:{
		children: "teste123",
	} as Meta<ButtonProps>,
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	} as Meta<ButtonProps>,
};

export const CustomComponent: StoryObj<ButtonProps> = {
	args: {
		children: "Custom Button",
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
};