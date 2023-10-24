import { ReactNode } from 'react';
import { Navbar } from '..';
import { Toaster } from 'sonner';

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Toaster position="bottom-right" richColors />
				{children}
			</main>
		</>
	);
};
