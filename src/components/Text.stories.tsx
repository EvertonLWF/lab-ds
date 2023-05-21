import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Components/Text",
	component: Text,
	args:{
		children: "teste123",
		size: "xs"
	} as Meta<TextProps>
};

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		children: "Custom Heading",
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
};