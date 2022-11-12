import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import About from './componets/About';
import React,{useState} from 'react';
import Alert from './componets/Alert';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
const [mode, setmode] = useState('light')
const [alert, setalert] = useState(null)

const callalert = (message,type) =>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setalert(null)
  },2000)

  
}
const toggal =() =>{
  if (mode === "light"){
    setmode('dark')
    document.body.style.backgroundColor = "#6599cd";
    callalert("dark mode enebal","success");

  }else{
    setmode('light')
    document.body.style.backgroundColor = "white";
    callalert("dark mode disebal","Success");
  }
}
const redtoggal =() =>{
  if (mode === "light"){
    setmode('red')
    document.body.style.backgroundColor = "red";
    callalert("red mode enebal","success");

  }else{
    setmode('light')
    document.body.style.backgroundColor = "white";
    callalert("dark mode disebal","Success");
  }
}

  return (
    
   <>
  
  
   <div className="container"  >
   <BrowserRouter>
   <Navbar title = "Karan" about ="about us" redtoggle={redtoggal} toggle={toggal} mode = {mode} />
   <Alert  alert={alert}/>
   <Routes>
   
     <Route exact path="/home" element={<TextForm callalert={callalert} mode = {mode}/>} />
     <Route exact path="/about" element={<About/>} />
     </Routes>
 </BrowserRouter>
          
          
   </div>
   
   </>
   
  );
}

export default App;
