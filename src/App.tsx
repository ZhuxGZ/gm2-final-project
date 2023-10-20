import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile, ProductPage, Cart, Shop, WhisList } from './pages';
import { AppLayout } from './components';
import { CartProvider, LoginStatusProvider, ProductsProvider, WishlistProvider } from './hooks';

function App() {
	return (
		<BrowserRouter>
			<LoginStatusProvider>
				<ProductsProvider>
					<CartProvider>
						<WishlistProvider>
							<AppLayout>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/login" element={<Login />} />
									<Route path="/product/:id" element={<ProductPage />} />
									<Route path="/profile" element={<Profile />} />
									<Route path="/cart" element={<Cart />} />
									<Route path="/shop" element={<Shop />} />
									<Route path="/wishlist" element={<WhisList />} />
								</Routes>
							</AppLayout>
						</WishlistProvider>
					</CartProvider>
				</ProductsProvider>
			</LoginStatusProvider>
		</BrowserRouter>
	);
}

export default App;
