import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const Root = () => {
    return (
        <div className='mx-2 md:mx-8 lg:mx-28'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;