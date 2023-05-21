import { TextInput, InputRootProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

export default {
	title: "Components/Input",
	component: TextInput.Root,
	args:{
		children: (
			<>	
				<TextInput.Icon>
					<Envelope size={24} />
				</TextInput.Icon>
				<TextInput.Input  placeholder="teste input"/>
			</>
		),
	},
	argTypes: {
	} as Meta<InputRootProps>,
};

export const CustomComponent: StoryObj<InputRootProps> = {};