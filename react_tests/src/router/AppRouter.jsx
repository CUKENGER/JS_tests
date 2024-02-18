import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Main from '../pages/Main';
import Users from '../components/users/Users';
import UserDetailsPage from '../pages/UserDetailsPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<Error/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users/:id' element={<UserDetailsPage/>}/>
            <></>
		</Routes>
    );
}

export default AppRouter;