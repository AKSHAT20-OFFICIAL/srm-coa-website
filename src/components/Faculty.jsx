
import React from 'react';
import Data from './info/data.json';
import Header from './Header';

const Faculty = () => {
  return (
    <div className ='bg-gray-400' >
    <Header />
    <table class="table-auto  m-2">
        <thead>
            <tr className='bg-black text-white font-mono '>
                <th className='px-6 border border-white py-4 text-center'>Sno</th>
                <th className="px-6 border border-white py-4 text-center"> Program</th>
                <th className="px-6 border border-white py-4 text-center">Department</th>
                <th className="px-6 border border-white py-4 text-center">Faculty Name</th>
                <th className="px-6 border border-white py-4 text-center">Mobile Number</th>
                <th className="px-6 border border-white py-4 text-center">Email Id</th>
                <th className="px-6 border border-white py-4 text-center">Course Code</th>
                
                <th className="px-6 border border-white py-4 text-center">Sec</th>
                <th className="px-6 border border-white py-4 text-center">Batch</th>
                <th className="px-6 border border-white py-4 text-center">Count</th>
                <th className="px-6 border border-white py-4 text-center">Classroom</th>
            </tr>
        </thead>
        <tbody>
            {Data.map((post)=>{
                return(
                    <tr className='bg-white text-black'>
                        <td className='bg-sky-900 border border-grey-600 text-white  px-6 py-4'>{post.slno}</td>
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.prg}</td>
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.dpt}</td>
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.fname}</td>
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.phone}</td>
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.email}</td>
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.crscd}</td>
                        
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.sec}</td>
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.btch}</td>
                        <td className='border border-grey-600  px-6 py-4 text-center'>{post.count}</td>
                        <td className='border border-grey-600 w-full  px-6 py-4 text-center'>{post.cr}</td>
                    </tr>
                );})}              
        </tbody>
    </table>
    </div>
    
    
  )
}

export default Faculty