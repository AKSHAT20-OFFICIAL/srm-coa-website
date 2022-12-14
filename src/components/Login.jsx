import { MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import Header from './Header';

const Login = () => {

    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

  return (
    <div className ='bg-gray-400' >
    <Header />
    <div class="min-h-screen bg-gray-400 flex items-center">
  <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
    <div class="py-12 p-10 bg-white rounded-xl">
      <div class="mb-6 flex items-center justify-center">
        <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Name</label>
        <input type="text" class="border bg-gray-100 py-2 px-4 w-50 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your name" />
      </div>
      <div class="mb-6 flex items-center justify-center">
        <label class="mr-4 text-gray-700 font-bold inline-block mb-2" for="name">Email</label>
        <input type="text" class="border bg-gray-100 py-2 px-4 w-50 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="@email" />
      </div>
      <div class="flex items-center justify-center">
      <span class="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span>
      </div>
      <button class="w-full mt-6 text-indigo-50 font-bold bg-sky-900 py-3 rounded-md hover:bg-indigo-500 transition duration-300">LOGIN</button>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Login;