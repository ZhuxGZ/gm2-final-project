import { useState } from 'react';
import { useEffect } from 'react';
import { useLoginStatus } from '../../hooks/LoginStatusContext';
import './Login.css';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
	let [firstView, setFirstView] = useState(0);
	const { getUserData, isLogged } = useLoginStatus();
	const [loginError, setLoginError] = useState(false);
	const navigate = useNavigate()

	console.log(firstView, loginError)

	useEffect(() => {
		if (firstView) {
			setLoginError(true);
			console.log("here")
		}
	}, [firstView])

	useEffect(() => {
		if (isLogged) {
			navigate('/');
		}
	}, [isLogged]);

	return (
		<div className="mainContent">
			<div className="container">
				{loginError && (
					<p className="error-message">Credenciales incorrectas. Verifica tus datos.</p>
				)}
				<div>
					<img
						className="img-login"
						src="https://s3-alpha-sig.figma.com/img/9d58/d0fd/1731b288203acac3b31cdcf78415d265?Expires=1698019200&Signature=ACJqCVT-P6E8G1tMeYrJ0YQNDjNWDfLJKp9PudCekB2yx09drENtBpo~CRn2eXsAGCwHdDbVVZtgVB5Cnk3Bvvshi5gXpk29HQ2wglQfui6Rz8ErzF5A0-eTSy0nTcXe5FZ-Wx84CkfP4T~gP8D22IEqjsqjJR-rjGHt6ZuQH9CiPD2vkn3grv-2auIP~N0LPpdpy3FEnvEGtWs~hLl89vpPn2uv9-zQ1KBt5nw2EE2Y-3whHR~NEDa6N5lnJUQTt1u9aGMPm2leD4yzWPC1fDldY6dvkxG2cG9dcSGNvR25Tyo6JQm5o8ktJiMy8GfBMn4jVh3rqXbNeKt6H5o0nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
						alt=""
					/>
				</div>
				<form
					className="form"
					onSubmit={(event) => {
						event.preventDefault();
						const inputs = event.currentTarget as unknown as HTMLInputElement[];
						const username = inputs[0].value;
						const password = inputs[1].value;
						getUserData(username, password);
						setFirstView(firstView + 1)
					}}
				>
					<input id="username" type="text" placeholder="Username" />
					<input id="password" type="password" placeholder="Password" />
					<button id="login" type="submit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
