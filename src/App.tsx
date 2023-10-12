import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Product, Profile } from './pages';

import { AppLayout } from './components';

function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path="/product/:id" element={<Product />} />
				</Routes>
			</AppLayout >
		</BrowserRouter >
	);
}

export default App;
