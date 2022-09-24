
import React from 'react';
import Data from './info/data.json'
const Faculty = () => {
  return (
    <table class="table-fixed mt-28 p-10">
        <thead>
            <tr>
                <th>sl no</th>
                <th>Program</th>
                <th>Department</th>
                <th>Faculty Name</th>
                <th>Mobile Number</th>
                <th>Email Id</th>
                <th>Course code</th>
                <th>Title</th>
                <th>sec</th>
                <th>Batch</th>
                <th>Count</th>
                <th>Classroom</th>
            </tr>
        </thead>
        <tbody>
            {Data.map((post)=>{
                return(
                    <tr>
                        <td>{post.slno}</td>
                        <td>{post.prg}</td>
                        <td>{post.dpt}</td>
                        <td>{post.fname}</td>
                        <td>{post.phone}</td>
                        <td>{post.email}</td>
                        <td>{post.crscd}</td>
                        <td>{post.title}</td>
                        <td>{post.sec}</td>
                        <td>{post.btch}</td>
                        <td>{post.count}</td>
                        <td>{post.cr}</td>
                    </tr>
                );})}              
        </tbody>
    </table>
  )
}

export default Faculty