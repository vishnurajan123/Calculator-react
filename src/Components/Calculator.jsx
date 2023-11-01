import ReCt, { useState } from 'react'
import './Calculator.css'
function Calculator() {
    const [value,setValue]=useState("")
    const [val,setVal]=useState("")
    const [dark,setDark]=useState(false)

    console.log(value);
    const expEval=()=>{
        try {
            setVal(value)
        setValue(eval(value))

    }
    catch{
        setValue("Invalid expression")
    }

    }
    const removeLast=()=>{
        setValue(value.toString().slice(0,-1))
    }
    const clearAll=()=>{
        setValue("")
        setVal("")
    }
    const Darkmode=()=>{
        if(dark==false){
            setDark(true)
        }
        else{
            setDark(false)
        }
    }
    console.log(dark);

  return (
    <div className={`${dark?"d-flex justify-content-center align-items-center aaa":"d-flex justify-content-center align-items-center bbb"}`} style={{height:"100vh"}}>
        <div className={`${dark?"card p-4 pt-5 calc calcDark":"card pt-5 p-4 calc"}`} >
<div className='pe-3 ps-3'>
                
    <div className={`${dark?"in inblack":"in"}`}>
        
                    <input className='in1' readOnly value={val} type="text"  />
                    <input className='in2' readOnly value={value} type="text" placeholder='0' />
                    
    </div>
</div>
            <div>
                <div className='d-flex justify-content-evenly mt-4'>
                    <button onClick={clearAll}  className='btn ' style={{borderRadius:"50%",width:"60px",height:"60px"}}>C</button>
                    <button onClick={()=>setValue(value+"%")} className='btn ' style={{borderRadius:"50%",width:"60px",height:"60px"}}>%</button>
                    <button onClick={removeLast}  className='btn ' style={{borderRadius:"50%",width:"60px",height:"60px"}}><i class="fa-solid fa-delete-left"></i></button>
                    <button onClick={()=>setValue(value+"/")} className='btn ' style={{borderRadius:"50%",width:"60px",height:"60px"}}><i class="fa-solid fa-divide"></i></button>

                </div>
                <div className='d-flex justify-content-evenly '>
                    <button onClick={()=>setValue(value+"7")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>7</button>
                    <button onClick={()=>setValue(value+"8")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>8</button>
                    <button onClick={()=>setValue(value+"9")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>9</button>
                    <button onClick={()=>setValue(value+"*")}  className='btn ' style={{borderRadius:"50%",width:"60px",height:"60px"}}>x</button>

                </div>
                <div className='d-flex justify-content-evenly '>
                    <button onClick={()=>setValue(value+"4")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>4</button>
                    <button onClick={()=>setValue(value+"5")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>5</button>
                    <button onClick={()=>setValue(value+"6")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>6</button>
                    <button onClick={()=>setValue(value+"-")} className='btn ' style={{borderRadius:"50%",width:"60px",height:"60px"}}>-</button>

                </div>
                <div className='d-flex justify-content-evenly '>
                    <button onClick={()=>setValue(value+"1")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>1</button>
                    <button onClick={()=>setValue(value+"2")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>2</button>
                    <button onClick={()=>setValue(value+"3")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>3</button>
                    <button onClick={()=>setValue(value+"+")} className='btn ' style={{borderRadius:"50%",width:"60px",height:"60px"}}>+</button>

                </div>
                <div className='d-flex justify-content-evenly '>
                    <button onClick={Darkmode} className={`${dark?"btn text-light border-0":"btn text-dark border-0"}`} style={{fontSize:"25px"}}>{dark? <i class="fa-solid fa-lightbulb"></i> : <i class="fa-solid fa-moon"></i>}</button>
                    <button onClick={()=>setValue(value+"0")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>0</button>
                    <button onClick={()=>setValue(value+".")} className={`${dark?"btn text-light":"btn text-dark"}`} style={{borderRadius:"50%",width:"60px",height:"60px"}}>.</button>
                    <button onClick={expEval} className='btn ' style={{borderRadius:"50%",width:"60px",height:"60px"}}>=</button>

                </div>
            </div>


        </div>
    </div>
  )
}

export default Calculator