import { Close } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({ showMenu, active }) => {
    return (
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 bg-sky-600 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
            <Close onClick={showMenu} className='cursor-pointer' />
            <li className="text-gray-300 hover:bg-blue-400 hover:text-white py-2 rounded-md font-medium">
                        <Link style={{textDecoration:'none'}} className="text-gray-300  hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium" to='/home'>Home</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white py-2 rounded-md font-medium">
                        <Link style={{textDecoration:'none'}} className="text-gray-300  hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium" to='/faculty'>Faculty Members</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white  py-2 rounded-md font-medium">
                    <div className="dropdown inline-block relative">
                        <span className="text-gray-300 px-4 rounded inline-flex items-center hover:text-white">
                            Syllabus</span>
                        <ul className="dropdown-menu absolute hidden text-gray-700 p-0">
                            <li class=""><Link style={{textDecoration:'none'}} className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/syllabus">Practical</Link></li>
                            <li class=""><Link style={{textDecoration:'none'}} className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/practical">Theory</Link></li>
                            <li class=""><Link style={{textDecoration:'none'}} className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/mom">MOM</Link></li>
                            </ul>
                    </div>
                    </li>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white py-2 rounded-md font-medium">
                        <Link style={{textDecoration:'none'}} className="text-gray-300  hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium" to='/units'>Notes</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white  py-2 rounded-md font-medium">
                        <Link style={{textDecoration:'none'}} className="text-gray-300  hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium" to='/login'>Login</Link>
                    </li>
        </ul>
    );
};

export default MenuItems;