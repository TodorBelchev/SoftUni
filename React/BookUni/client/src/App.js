import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserProvider from './context/userContext';

import Layout from './components/layout/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import AddHotel from './components/hotel/AddHotel/AddHotel';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/add' element={<AddHotel />} />
					</Routes>
				</Layout>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
