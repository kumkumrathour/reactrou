import React from 'react';
import { useState } from 'react';
const Resister = () => {
    const [data,setData] =useState("");
    const [print,setPrint] = useState(false);
const [sdata, setsdata] = useState("");
    function getData(e){
        setData(e.target.value);
    }
    function submitHandler(e){
       e.preventDefault();
       setPrint(true);
       setsdata(data);
    }
  return (
    <>
    <div>{print && data && <h2>{sdata}</h2>}
      <form onSubmit={submitHandler}>
      <div>This is Resister page</div>
      <br></br>
      {/* <div>{data}</div> */}
      <input type="text" value={data} onChange={getData}></input>
      <br></br>
      <button onClick={()=>setPrint(true)}>Submit</button>
      </form>
      </div>
    </>
  );
}

export default Resister;
