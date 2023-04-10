import React, { useEffect } from 'react';
import { useState } from 'react';
const Resister = () => {
    const [data,setData] =useState("");
    const [print,setPrint] = useState(false);
    const [sdata, setsdata] = useState("");
    const [oldSearches, setoldSearches] = useState([]);

  useEffect(() => {
    return () => {
      setoldSearches(getsaveddata())
    };
  }, []);

    function onChangeHandler(e){
        setData(e.target.value);
    }
    function getsaveddata() {
      let data = JSON.parse(localStorage.getItem('data'))
      console.log(data);
      return data
    }
    function submitHandler(e){
       e.preventDefault();
       setPrint(true);
       setsdata(data);
      //  localStorage.setItem("keyValue",sdata);
      let newarr = [...oldSearches,data]
      setoldSearches(newarr)
      console.log(newarr);
      localStorage.setItem('data',JSON.stringify(newarr))
      }
      // saveLocal(data);
  // call kru nahiare 
      console.log(data);
      
      // function saveLocal(sdata){
      //   let dataValue ;
      //   if(localStorage.getItem("datValue")===null){
      //     dataValue=[];
      //   }
      //   else{
      //     dataValue=JSON.parse(localStorage.getItem("dataValue"));
      //   }
      //     dataValue.push(sdata);
      //     localStorage.setItem("dataValue",JSON.stringify(dataValue));
      // }
      // function getLocal(){
      //   if(localStorage.getItem("datValue")===null){
      //     dataValue=[];
      //   }
      //   else{
      //     dataValue=JSON.parse(localStorage.getItem("dataValue"));
      //   }

      // }
  
  return (
    <>
    <div>{print && <h2>{sdata}</h2>}
      <form onSubmit={submitHandler}>
      <div>This is Resister page</div>
      <br></br>
      {/* <h3>{saveLocal}</h3> */}
      {/* <div>{data}</div> */}
      <input type="text" value={data} onChange={onChangeHandler}></input>
      <br></br>
      <button onClick={()=>setPrint(true)}>Submit</button>
      </form>
      </div>
      <div>
        <ul>
          {oldSearches.map((ele)=><li>{ele}</li>)}
        </ul>
      </div>
    </>
  );
}

export default Resister;
