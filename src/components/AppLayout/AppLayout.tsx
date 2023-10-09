import { ReactNode } from 'react';

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<>
			<header></header>
			<main>{children}</main>
		</>
	);
};
