import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
// import About from './componets/About';
import React,{useState} from 'react';
import Alert from './componets/Alert';


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

  return (
   <>
 
   <Navbar title = "Karan" about ="about us" toggle={toggal} mode = {mode} />
   <Alert  alert={alert}/>
   <div className="container"  >
  
  <TextForm callalert={callalert} mode = {mode}/>
   </div>
   
   </>
  );
}

export default App;
