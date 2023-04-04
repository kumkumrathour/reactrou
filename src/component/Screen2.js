import React from 'react';
import {  useNavigate } from 'react-router';
import { useLocation } from 'react-router'; 
const Screen2 = () => {
    const navigate = useNavigate();
    const locat = useLocation();
    console.log(locat.state);
  return (
    <>
    <div>
      Screen 2 is here
    </div>
    <br></br>
    <div>The first screen value in the second screen is {locat.state.finVal}</div>
    <button onClick={()=>{navigate(-1)}}>Screen2 to Screen1</button>
    </>
  );
}

export default Screen2;
