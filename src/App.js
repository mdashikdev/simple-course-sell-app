import './App.css';
import Course from './components/Course/Course';
import fakeData from './fakeData.json';

import {useState} from 'react'

function App() {
  const [enrolled, setenrolled] = useState([])
  const [isActive, setActive] = useState("false");
  const toggleContainer=()=>{
    setActive(!isActive);
  }
  const handleEnrolled = (course) =>{
    let newCourse;
    const findsm=enrolled.find(cr => cr.id === course.id);
    if (findsm) {
      const filterOthers=enrolled.filter(cr => cr.id !== course.id);
      newCourse = [...filterOthers,findsm];
      alert('Already Enrolled');
    }else{
      newCourse = [...enrolled,course];
      console.log('pawa jai ni');
    }
    setenrolled(newCourse);
  }
  
  // console.log(enrolled);

  const totalPrice=enrolled.reduce((total,course)=> {
    return total + course.price
  },0)
  return (
    <div className="App flex flex-col items-center">
      <header className='w-11/12 relative flex rounded justify-between px-4 bg-slate-600 py-3'>
        <h1 className='text-white text-2xl sm:text-xl font-semibold'>Education Course App</h1>
        <button onClick={()=> toggleContainer()} className='bg-white hover:bg-gray-200 duration-150 py-2 px-4 rounded text-md text-black flex gap-2 w-fit h-fit items-center'>Enrolled </button>
      </header>
      <div className={isActive ? "cart_container active" : 'cart_container'}>
          <table>
            <thead className='bg-blue-200 text-white'>
              <tr>
                <th>Course name</th>
                <th>Price</th>
              </tr>
            </thead>
            {
              enrolled.map(res => 
                <tr>
                  <td>{res.title.slice(0,25)}...</td>
                  <td>${res.price}</td>
                </tr>
                )
            }
            <tr>
                <th>Total</th>
                <th>${totalPrice}</th>
              </tr>

          </table>
        </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 w-11/12 h-fit pt-10'>
          {
            fakeData.map(res => <Course courseInf={res} handleEnrolled={handleEnrolled} /> )
          }
      </div>
      
    </div>
  );
}

export default App;
