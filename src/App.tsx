import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login } from './pages';
import { AppLayout } from './components';

function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	);
}

export default App;
