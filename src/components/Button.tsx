import { clsx } from 'clsx';

export interface ButtonProps {
	children?: string;
}


export function Button({ children = "default" }: ButtonProps) {
	return (
		<button className={
			clsx(
				'py-4 px-3 bg-cyan-500 rounded font-semibold text-black  w-full text-sm hover:bg-cyan-300 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-cyan-500 focus:outline-none',
				{
					
				})
		}>{children}</button>
	)
}