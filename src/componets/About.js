import React,{useState} from 'react'

export default function About() {
 const [mystyl, setmystyl] = useState(
   { color: 'white',
    backgroundColor:'black'
 }
 )
const [btntext, setbtntext] = useState("Enebal dark mode")
 const settoggal = ()=>{
    if (mystyl.color === 'white'){

      setmystyl ({
        color: 'black',
    backgroundColor:'white'
    
      })
      setbtntext('Enebal dark mode')
    }
    else{
        setmystyl ({
            color: 'white',
        backgroundColor:'black'
          })
          setbtntext('Enebal light mode')
    }

   
 }
  return (
    <div style={mystyl}>
        <div className="accordion my-3"   id="accordionExample">
         <div className="accordion-item" >
            <h2 className="accordion-header"   id="headingOne">
                <button className="accordion-button" style={mystyl} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body " style={mystyl}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
            <div className="accordion-item" >
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={mystyl} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={mystyl}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div className="accordion-item" >
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={mystyl} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyl}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
        </div>
        <button type="button" onClick={settoggal} class="btn btn-primary">{btntext}</button>
    </div>
  )
}
