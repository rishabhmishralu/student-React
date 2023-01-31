
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './DataContext';
import "./App.css"

const handleAdd = ()=>
{
    console.log("Add called")
}

function Table() {
  const context = useContext(DataContext);
  // context is the value that we have provided
  console.log(context);
  return (
    <>

    <h1>Student Details</h1>
   <Link to="/addStudent"><div className='btn-div'>
   <button className='btn' onClick={handleAdd}>Add New Student</button>
   </div></Link>
      <br></br>
           <table className='table' border="2px" >
            <tbody>
             <tr  >
                <th className='td'>Name</th>
                <th className='td'>Age</th>
                <th className='td'>course</th>
                <th className='td'>Batch</th>
                <th className='td'>Edit</th>
             </tr>
             
             {
        context.entries.map((item,index) => (

             <tr key={index} > 
               <td>{item.name}</td>
               <td>{item.age}</td>
               <td>{item.course}</td>
               <td>{item.batch}</td>
               <td> <Link to='./editStudent' state={{data:index}}>
                    Edit
                </Link> </td>
             </tr>))}
             </tbody>
           </table>
      
    </>
  );
}

export default Table;