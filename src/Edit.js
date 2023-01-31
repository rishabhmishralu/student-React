import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';
import "./App.css"


function Edit() {
   const context = useContext(DataContext);
   const location = useLocation(); // returns the location object 
   console.log(location.state.data) // the id present with the state property of the l;ocation object
   const navigate = useNavigate();
   const index = (location.state.data);
   

    const newObj = {
        name : context.entries[index].name,
        age : context.entries[index].age,
        course : context.entries[index].course,
        batch : context.entries[index].batch,
    }
    
    console.log("Index : " + index)
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       console.log(context.entries[index])
       context.updateFunction(
        (prevObj)=>{
            prevObj[index] = newObj;
            return (prevObj)
        }
       );
       navigate('/');
    }


   return (
    <>
        
        <div id='form-head'>
            
        <div className='form'>
        <form>
        <label htmlFor="name">Name</label><br />
        <input className='form-box' onChange={handleChange} name='name' placeholder= {context.entries[index].name}></input><br />
        <label htmlFor="age">Age</label><br />
        <input className='form-box' onChange={handleChange} name='age'   placeholder= {context.entries[index].age}></input><br />
        <label htmlFor="course">Course</label><br />
        <input className='form-box' onChange={handleChange} name='course'   placeholder= {context.entries[index].course}></input><br />
        <label htmlFor="batch">Batch</label><br />
        <input className='form-box' onChange={handleChange} name='batch'   placeholder= {context.entries[index].batch}></input><br />
        <br/>
        <button className='btn' onClick={handleUpdate}>Update</button>
        </form></div>
        </div>
    </>
  )
}

export default Edit;