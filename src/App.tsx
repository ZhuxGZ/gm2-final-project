import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { AppLayout } from './components';

function App() {
	return (
		<AppLayout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</AppLayout>
	);
}

export default App;
