import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import MapContainer from './components/MapContainer';
import { Routes, Route, Link } from "react-router-dom";
import './index.css';

function App() {
  const url = "http://localhost:3001/api/companyvehiclelatestinfo";
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    return axios.get(url).then((response) => {
      setUsers(response.data.Vehicle);
    });
  };

  useEffect(() => {
    fetchData();
  } , []);



  const markerLocation = users.slice(0,25).map((user,index) => (
    {
     lat: user.Lat,
     lng: user.Long,
    }
  ));


  const customProps = {
    markerLocations : markerLocation
  };

  return (
    <div className="App">

      <nav className='navbar'>
        <Link className='navLink' to='/'>        Home </Link>
        <Link className='navLink' to='/page1'>        View1</Link>
        <Link className='navLink' to='/page2'>        View2</Link>
        <Link className='navLink' to='/MapContainer'> View3</Link>
        <Link className='navLink' to='/page4'>        View4</Link>
        <Link className='navLink' to='/page5'>        View5</Link>
        <Link className='navLink' to='/page6'>        View6</Link>
      </nav>

    
      <Routes>
        <Route path='/'  element = {<Page1 users={users} />} />
        <Route path='/page1'  element = {<Page1 users={users} />} />
        <Route path='/page2'  element = {<Page2 users={users} />} />
        <Route path='/MapContainer'  element = {<MapContainer {...customProps} />} />
        <Route path='/page4'  element = {<Page4 />} />
        <Route path='/page5'  element = {<Page5 />} />
        <Route path='/page6'  element = {<Page6 />} />
      </Routes>


    </div>
  );
}

export default App;
