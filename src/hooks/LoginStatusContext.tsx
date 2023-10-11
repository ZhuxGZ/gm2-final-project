import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';

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

const LoginStatusContext = createContext({});

export const useLoginStatus = () => {
	return useContext(LoginStatusContext);
};

export const LoginStatusProvider = ({ children }: { children: ReactNode }) => {
	const [userData, setUserData] = useState<User>();
	const isLogged = !!userData;

	const getUserData = useCallback((username: string, password: string) => {
		fetch('https://dummyjson.com/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((data) => setUserData(data));
	}, []);

	return (
		<LoginStatusContext.Provider value={{ isLogged, getUserData, userData }}>
			{children}
		</LoginStatusContext.Provider>
	);
};
