import { ReactNode, createContext, useContext, useState } from 'react';

export interface User {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
}

type LoginStatusContextT = {
	getUserData: (u: string, p: string) => Promise<void>;
	isLogged: boolean;
	userData: User | undefined;
};
const LoginStatusContext = createContext({} as LoginStatusContextT);

export const useLoginStatus = () => {
	return useContext<LoginStatusContextT>(LoginStatusContext);
};

export const LoginStatusProvider = ({ children }: { children: ReactNode }) => {
	const [userData, setUserData] = useState<User>();
	const isLogged = !!userData?.token;

	const getUserData = async (username: string, password: string) => {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		};

		const response = await fetch('https://dummyjson.com/auth/login', options);
		const data = await response.json();
		setUserData(data);
	};

	return (
		<LoginStatusContext.Provider value={{ getUserData, isLogged, userData }}>
			{children}
		</LoginStatusContext.Provider>
	);
};
