import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext';



const Add = () => {
    const context = useContext(DataContext);
   const navigate=useNavigate()
 
const [s,setS]=useState({
    name:"",
    age:"",
    course:"",
    batch:""
})

   const handleChange=(e)=>{
    setS({...s,[e.target.name]:e.target.value}) 
    console.log(s)
   }

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(context.entries)
       context.updateFunction(
        (prevObj)=>{
            prevObj.push(s);
            return (prevObj)
        }
       );
       navigate('/');
    }
  return (
    <div>
      <h1>Add Student</h1>
      <div id='form-head'>
        <div className='form'>
        <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label><br />
        <input className='form-box' onChange={handleChange} type="text" name="name" value={s.name} placeholder='name'/><br />
        <label htmlFor="age">Age</label><br />
        <input className='form-box' onChange={handleChange} type="number" name="age" value={s.age} placeholder='age'/><br />
        <label htmlFor="course">Course</label><br />
        <input className='form-box' onChange={handleChange} type="text" name="course" value={s.course} placeholder='course'/><br />
        <label htmlFor="batch">Batch</label><br />
        <input className='form-box' onChange={handleChange} type="text" name="batch" value={s.batch} placeholder='batch'/><br />
        <button className='btn' type="submit">Add Student</button>
        </form></div>
        </div>
    </div>
  )
}

export default Add