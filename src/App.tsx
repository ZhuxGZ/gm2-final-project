import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Home, Login, Profile } from './pages';
=======
import { Home, Login, Product } from './pages';
>>>>>>> 063e6b66421aa601840bd1daf3f1fc702cfd064b
import { AppLayout } from './components';

function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
<<<<<<< HEAD
					<Route path='/profile' element={<Profile />} />
				</Routes >
=======
					<Route path="/product/:id" element={<Product />} />
				</Routes>
>>>>>>> 063e6b66421aa601840bd1daf3f1fc702cfd064b
			</AppLayout>
		</BrowserRouter>
	);
}

export default App;
