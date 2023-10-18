import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile, Product, Shop } from './pages';
import { AppLayout } from './components';
import { LoginStatusProvider, ProductsProvider } from './hooks';

function App() {
	return (
		<BrowserRouter>
			<LoginStatusProvider>
				<ProductsProvider>
					<AppLayout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/product/:id" element={<Product />} />
							<Route path="/profile" element={<Profile />} />
							<Route path='./shop' element={<Shop />} />
						</Routes>
					</AppLayout>
				</ProductsProvider>
			</LoginStatusProvider>
		</BrowserRouter>
	);
}

export default App;
