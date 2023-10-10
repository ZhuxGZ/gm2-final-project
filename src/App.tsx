import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile } from './pages';
import { AppLayout } from './components';

function App() {
	return (
		<AppLayout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path='/profile' element={<Profile />} />
				</Routes >
			</BrowserRouter>
		</AppLayout>

	);
}

export default App;
