import './App.css';
import Faculty from './components/Faculty';
import Header from './components/Header';
import Syllabus from './components/Syllabus';
import pic from './components/images/img1.jpg';
import pic1 from './components/images/img1.jpg';
import pic2 from './components/images/img1.jpg';

function App() {
  return (
    <>

    <Header/>
    {/* <Faculty/> */}
    <div className='inline-grid grid-cols-3'>
       <img src={pic} height="70%" width="70%" className='m-10'/>
       <img src={pic} height="70%" width="70%" className='m-10'/>
       <img src={pic} height="70%" width="70%" className='m-10'/>

       
    </div>
    
   
   
    
    </>
  );
}

export default App;
