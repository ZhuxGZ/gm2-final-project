import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile, Product } from './pages';
import { AppLayout } from './components';
import { LoginStatusProvider } from './hooks';

function App() {
	return (
		<BrowserRouter>
			<LoginStatusProvider>
				<AppLayout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</AppLayout>
			</LoginStatusProvider>
		</BrowserRouter>
	);
}

export default App;
