import './App.css';
import {Routes,Route} from 'react-router-dom';
import PageFirst from './formComponent/PageFirst';
import About from  './formComponent/About';
import Resister from './formComponent/Resister';
import Login from './formComponent/Login';
// import Screen1 from './component/Screen1';
// import Screen2 from './component/Screen2';
// import FormInput from './component/FormInput';
// import Navbar from './component/Navbar';

function App() {
  return (
    <>
      {/* <Navbar/> */}
        <Routes>
          {/* <Route path='/' element={<Screen1/>}></Route> */}
          {/* <Route path='/Screen2' element={<Screen2/>}></Route> */}
          {/* <Route path='/FormInput' element={<FormInput/>}></Route> */}
          <Route path="/" element={< PageFirst/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Logic" element={<Login/>}/>
          <Route path="/Resister" element={<Resister/>}/>
        </Routes>
    </>
  );
}

export default App;
