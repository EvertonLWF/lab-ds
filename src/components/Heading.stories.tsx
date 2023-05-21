/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable storybook/story-exports */
import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Components/Heading",
	component: Heading,
	args:{
		children: "Test Headingß",
		size: "xs"
	} as Meta<HeadingProps>
};


export const CustomComponent: StoryObj<HeadingProps> = {
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