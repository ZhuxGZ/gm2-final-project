import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Product } from './pages';
import { AppLayout } from './components';
import { LoginStatusProvider } from './hooks';

function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<LoginStatusProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/product/:id" element={<Product />} />
					</Routes>
				</LoginStatusProvider>
			</AppLayout>
		</BrowserRouter>
	);
}

export default App;
