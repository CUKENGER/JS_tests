import { Routes, Route } from 'react-router-dom';
import { About, Error, Main, Users, UserDetailsPage } from '../pages';

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