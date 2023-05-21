import { clsx } from 'clsx';

export interface HeadingProps {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	children?: string;
}


export function Heading({ size = 'xs', children = "default" }: HeadingProps) {
	return(
		<h1 className={
			clsx(
				'text-gray-100 font-sans',
				{
					'text-xs': size === 'xs',
					'text-sm': size === 'sm',
					'text-base': size === 'md',
					'text-lg': size === 'lg',
					'text-xl': size === 'xl',
				})
		}>{children}</h1>
	)
}