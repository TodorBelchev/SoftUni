import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserProvider from './context/userContext';

import Layout from './components/layout/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import AddHotel from './components/hotel/AddHotel/AddHotel';
import HotelDetails from './components/hotel/HotelDetails/HotelDetails';
import EditHotel from './components/hotel/EditHotel/EditHotel';
import UserProfile from './components/UserProfile/UserProfile';
import AuthGuard from './guards/AuthGuard/AuthGuard';
import OwnerGuard from './guards/OwnerGuard/OwnerGuard';
import ProfileGuard from './guards/ProfileGuard/ProfileGuard';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={
							<AuthGuard>
								<Login />
							</AuthGuard>
						} />
						<Route path='/register' element={
							<AuthGuard>
								<Register />
							</AuthGuard>
						} />
						<Route path='/add' element={
							<AuthGuard>
								<AddHotel />
							</AuthGuard>
						} />
						<Route path='/hotel/:id' element={<HotelDetails />} />
						<Route path='/hotel/:id/edit' element={
							<OwnerGuard>
								<EditHotel />
							</OwnerGuard>
						} />
						<Route path='/user/:id' element={
							<ProfileGuard>
								<UserProfile />
							</ProfileGuard>
						} />
					</Routes>
				</Layout>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
