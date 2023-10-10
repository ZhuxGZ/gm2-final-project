import { ReactNode } from 'react';
import { Navbar } from '..';

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</>
	);
};
