
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
                <th className='bg-gray-800'>Sno</th>
                <th> Program</th>
                <th>Department</th>
                <th>Faculty Name</th>
                <th>Mobile Number</th>
                <th>Email Id</th>
                <th>Course code</th>
                
                <th>Sec</th>
                <th>Batch</th>
                <th>Count</th>
                <th>Classroom</th>
            </tr>
        </thead>
        <tbody>
            {Data.map((post)=>{
                return(
                    <tr className='bg-gray-400 text-white'>
                        <td className='bg-sky-900 text-white'>{post.slno}</td>
                        <td className='border border-grey-600'>{post.prg}</td>
                        <td className='border border-grey-600'>{post.dpt}</td>
                        <td className='border border-grey-600'>{post.fname}</td>
                        <td className='border border-grey-600'>{post.phone}</td>
                        <td className='border border-grey-600'>{post.email}</td>
                        <td className='border border-grey-600'>{post.crscd}</td>
                        
                        <td className='border border-grey-600'>{post.sec}</td>
                        <td className='border border-grey-600'>{post.btch}</td>
                        <td className='border border-grey-600'>{post.count}</td>
                        <td className='border border-grey-600'>{post.cr}</td>
                    </tr>
                );})}              
        </tbody>
    </table>
    </div>
    
    
  )
}

export default Faculty