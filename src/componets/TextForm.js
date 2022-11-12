// import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react'

export default function TextForm(prop) {
    const upclick =() =>{
        let newtext = text.toUpperCase();
        setText(newtext)
       prop.callalert('asuhaussadi', 'success')
    }
    const lowclick =() =>{
        let newtext = text.toLowerCase();
        setText(newtext)
        
    }
    const cleclick =() =>{
       
        setText('')
        
    }
    const trimclick =() =>{
        let newtext = text.replace(/\s+/g,' ');
        setText(newtext)
        
    }
    const copyclick =() =>{
       navigator.clipboard.writeText(text);
       
        
    }

    const chang =(event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
   
  return (
    <div >
        <div className="mb-3 my-5  " style={{color: prop.mode ==='light'?'black':'white'}}>
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" style={{backgroundColor:prop.mode ==='light'?'white':'#6599cd', color: prop.mode ==='light'?'black':'white'}} value={text} onChange={chang} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mx-2 my-3" onClick={upclick}>Upparcase</button>
            <button className="btn btn-primary mx-2 my-3" onClick={lowclick}>lowercase</button>
            <button className="btn btn-primary mx-2" onClick={cleclick}>clear</button>
            <button className="btn btn-primary" onClick={trimclick}>trim</button>
            <button className="btn btn-primary mx-2 my-3" onClick={copyclick}> copy text</button>
        </div>
        <div style={{color: prop.mode ==='light'?'black':'white'}}>
            <h1>your text summary</h1>
            <p>{text.split(/\s+/).length } world and {text.length} cerecter</p>
            <p>{0.008 * text.split(" ").length} read</p>
            <h2>preview</h2>
            <p>{text}</p>
            
        </div>
       
    </div>
  )
}
