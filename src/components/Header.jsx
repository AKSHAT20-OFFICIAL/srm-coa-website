import { MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

const Header = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className=' w-full   top-0 text-white flex justify-between p-4 items-center bg-sky-600'>
        <div className='text-xl font-bold text-center'>
            <h1> SRM <span className='block text-2xl'>Coa - 2023</span></h1>
        </div> 

        <nav>
            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlined onClick={showMenu} className='scale-100 cursor-pointer'/>
            </div>
                <ul className='hidden md:flex gap-8 p-6 uppercase'>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium">
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
                    </li>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium">
                        <Link to='/register'>Register</Link>
                    </li>
                </ul>

                <MenuItems showMenu={showMenu} active={active}/>

        </nav>

    </div>
  );
};

export default Header;