import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
const FormInput = () => {
    const navigate = useNavigate();
    const [data,setData] =useState(" ");
    const [print,setPrint] =useState(false);
    const id= "neha Rathour";
     
    function goToScreen1(){
      navigate("/", {state:{id:id}});
    }

    function getValue(val){
      // val.preventDefault();
        // console.log(val.target.value);
        setData(val.target.value)
    }
    function handleSubmit(e){
      e.preventDefault();
      setPrint(true);
    }
  return (
    <>
    <div>{print && data && <h2>{data}</h2> }
    <form onSubmit={handleSubmit}>
       <input  type="text" value={data} onChange={getValue}/>
       <br></br>
       <button  type="submit" onClick={()=>setPrint(true)}>Submit</button>
       <br></br>
       </form>
       <br></br>
       <button onClick={goToScreen1}>to React Screen 1</button>
    </div>
    </>
      
  );
}

export default FormInput;
