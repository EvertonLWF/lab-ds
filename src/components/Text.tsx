import {clsx} from 'clsx';

export interface TextProps {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	children?: string;
}


export function Text({ size='xs', children="default" }: TextProps) {
	return (
		<span className={
			clsx(
				'text-gray-100 font-sans',
				{
					'text-xs': size === 'xs',
					'text-sm': size === 'sm',
					'text-base': size === 'md',
					'text-lg': size === 'lg',
					'text-xl': size === 'xl',
				})
		}>{children}</span>
	)
}