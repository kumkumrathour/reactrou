import { useState } from 'react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
const Screen1 = () => {
  const [text,setText] = useState("");
  const finVal = "kumkum";
    const navigate= useNavigate();
    const location = useLocation();
    console.log(location);
        function goToScreenTo(){
          navigate("/Screen2",{state:{finVal:finVal}});

        }

        const submitHandler=(e)=>{
            e.preventDefault();
            const val =e.target.value;
            setText(val);
            console.log(val);
        }
  return (
        <>
        <form onSubmit={submitHandler}>
        <input type ={text} placeHolder="Enter" onChange={(e)=>setText(e.target.value)}/>
        <div>
        Screen 1 is Here
       </div>
       <br></br>
       <button onClick={goToScreenTo}>Submit Page1</button>
       <div>from form to screen1 {location.state.finVal}</div>
       <button onClick={()=>{navigate('FormInput')}}>form fill </button>
      </form>
     </>
  );
}

export default Screen1;
