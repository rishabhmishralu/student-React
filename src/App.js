import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Add from './Add';
import DataContext from './DataContext';
import Edit from './Edit';
import About from './navbar/About';
import Contact from './navbar/Contact';
import Nav from './navbar/Nav';
import Table from './Table';


function App() {
  const [data, setData] = useState([{ name: 'name1' ,age:40,course:"mern",batch:"EA-17" }, { name: 'name2',age:25,course:"mern",batch:"sept" }]);
  return (
    <>
    <Nav/>
    <Routes>
      {/* Home  */}
      <Route path='/' element={
         <DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <Table />
         </DataContext.Provider>
      }/>
      {/* Edit  */}
      <Route path='/editStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Edit/>
        </DataContext.Provider>
      }/>

    <Route path='/addStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Add />
        </DataContext.Provider>
      }/>

<Route path='/about' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <About />
        </DataContext.Provider>
      }/>
       <Route path='/contact' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <Contact />
        </DataContext.Provider>
      }/>

    </Routes>
    </>
  );
}

export default App

