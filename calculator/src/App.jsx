import React, { useState } from 'react'

const App = () => {
  const [result,setResult]=useState('')

  const handleClick=(e)=>{
   console.log("clicked value : ",e.target.value)
   console.log("previous value : ",result)
   setResult(result.concat(e.target.value))
  }

//   const clearInput=()=>{ss
//     setResult("")
//   }

//   const inputResult=()=>{
// setResult(eval(result))
// console.log(result)  
// }
  return (
    <>
   <div id='container'>
       < input type='text' id='inputField' value={result} onChange={(e)=>setResult(e.target.value)}/>
       <div id='btns'>
       <input type='button' value='C'/> 
       <input type='button' value='AC'/> 
       <input type='button' value='%'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='*'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='1'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='2'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='3'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='+'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='4'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='5'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='6'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='-'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='7'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='8'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='9'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='/'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='00'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='0'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='.'onClick={(e)=>handleClick(e)}/> 
       <input type='button' value='='onClick={(e)=>handleClick(e)}/> 
       </div>
   </div>
    </>
  )

}
export default App