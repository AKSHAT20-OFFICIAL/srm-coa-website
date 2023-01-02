import { MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import logo from "../components/images/Srmseal.png"
import './header.css'
const Header = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className=' w-full   top-0 text-white flex justify-between p-4 items-center bg-sky-900'>
        <div className='text-xl flex font-bold text-center'>
            <img src={logo} alt="logos" width="23%" height="23%"/>
            
                <h1 className='m-10 font-mono text-[25px] text-slate-400 font-bold'><span className="justify-between">COA-SRM</span></h1>
        </div>  

        <nav>
            <div className='absolute right-6 md:hidden top-6 scale-150'>
                <MenuOutlined onClick={showMenu} className='scale-100 cursor-pointer'/>
            </div>
                <ul className='hidden md:flex gap-8 p-6 '>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white py-2 rounded-md font-medium">
                        <Link style={{textDecoration:'none'}} className="text-gray-300  hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium text-lg" to='/home'>Home</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white py-2 rounded-md font-medium">
                        <Link style={{textDecoration:'none'}} className="text-gray-300  hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium text-lg" to='/faculty'>Faculty Members</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white  py-2 rounded-md font-medium text-lg">
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
                        <Link style={{textDecoration:'none'}} className="text-gray-300  hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium text-lg" to='/units'>Notes</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-blue-400 hover:text-white  py-2 rounded-md font-medium">
                        <Link style={{textDecoration:'none'}} className="text-gray-300  hover:bg-blue-400 hover:text-white px-4 py-2 rounded-md font-medium text-lg" to='/login'>Login</Link>
                    </li>
                </ul>

                <MenuItems showMenu={showMenu} active={active}/>

        </nav>

    </div>
  );
};

export default Header;