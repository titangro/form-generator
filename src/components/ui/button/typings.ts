import React from 'react';

export interface UiButtonProps extends React.ButtonHTMLAttributes<Element> {
	className?: string;
	isActive?: boolean;
	onClick?: (event: React.MouseEvent) => void;
}
