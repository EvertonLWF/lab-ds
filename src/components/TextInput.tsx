/* eslint-disable @typescript-eslint/no-empty-interface */
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface InputRootProps { children: React.ReactNode }
export interface InputIconProps { children: React.ReactNode }

export const InputRoot = (props: InputRootProps) => {
	return (
		<div className="flex items-center gap-3 py-4 px-3 bg-gray-800 rounded w-full focus-within:ring-2 ring-cyan-300">
			{props.children}
		</div>
	);
}

export function InputIcon({ children }: InputIconProps) {
	return (
		<div className='text-gray-400 w-6 h-6'>
			{children}
		</div>
	)
}

export function Input(props: InputProps) {
	return (
		<input
			className="bg-transparent outline-none w-full placeholder-gray-400 text-gray-100 font-sans text-xs"
			{...props}
		/>
	);
}

export const TextInput = {
	Root: InputRoot,
	Input: Input,
	Icon: InputIcon,
}