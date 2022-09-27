import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({ showMenu, active }) => {
    return (
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-sky-600 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
            <Close onClick={showMenu} className='cursor-pointer' />
            <li className="text-gray-300 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md text-base font-medium">
                <Link to='/'>Home</Link>
            </li>
            <li className="text-gray-300 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium">
                <Link to='/faculty'>Faculty Members</Link>
            </li>
            <li className="text-gray-300 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium">
                <Link to='/syllabus'>Syllabus</Link>
            </li>
            <li className="text-gray-300 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium">
                <Link to='/units'>Notes</Link>
                <Link to='/notes'>Notes</Link>
            </li>
            <li className="text-gray-300 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium">
                <Link to='/login'>Register</Link>
            </li>
        </ul>
    );
};

export default MenuItems;