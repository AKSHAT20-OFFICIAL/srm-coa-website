import React from 'react'
import Image from './info/image'
import pic from './images/coaimg.png'

import Header from './Header';
function Home() {
  return (
    <div>
    <Header/>
     <div className='bg-gray-300'>
      
    <div className= 'grid  grid-cols-8 py-[5vh] '>
    <div className='col-span-1'></div>
       {Image.map((post)=>{return(
        <div className=' col-span-2 p-10'>
          <img src={post.image}/>
          <h1 className='text-center'>{post.name}</h1>
          <h1 className='text-center'>{post.desig}</h1>
       </div>
       )})}
    <div className='col-span-1'></div>
    </div>
    
    <div className='grid grid-cols-2 px-[15vw] py-[10vh] gap-[2vw]'>
       <div className='col-span-1 pl-50'>
         <h1 className='text-slate-900 text-5xl font-mono font-bold pb-5'>About Us</h1>
         <p className='text-l'>Computer Organization and Architecture Tutorial provides in-depth knowledge of internal working, structuring, and implementation of a computer system.
                         Whereas, Organization defines the way the system is structured so that all those catalogued tools can be used properly.
                         Our Computer Organization and Architecture Tutorial includes all topics of such as introduction, ER model, keys, relational model, join operation, SQL, functional dependency, transaction, concurrency control, etc.</p>    
       </div>
      <div className='m-5 col-span-1'>
        <img src={pic} className='m-100px w-[25vw]'  />
      </div>
    </div>
   <div className=' px-[15vw] py-[10vh] gap-[15vw]'>
   <h1 className='text-slate-900 text-5xl font-mono font-bold pb-5'>Course Learning Outcomes (CLO)</h1>
   <ul className='list-disc'>
    <li>Identify the computer hardware and how software interacts with computer hardware</li>
    <li>Apply Boolean algebra as related to designing computer logic, through simple combinational and sequential logic circuits</li>
    <li>Analyze the detailed operation of Basic Processing units and the performance of Pipelining</li>
    <li>Analyze concepts of parallelism and multi-core processors</li>
    <li>Identify the memory technologies, input-output systems and evaluate the performance of memory system</li>
    <li>Identify the computer hardware, software and its interactions</li>
   </ul>


   </div>
   </div>

   </div>
  )
}

export default Home