import React,{useEffect, useState} from "react";
function UseEff(){
    const [val, setVal] = useState(0);
    useEffect(()=>{
        console.log("update");
    },[])
    // const styleItem = {color:'red',backgroundColor:'yellow'}
  return(
    
    <div>
        <h1>UseEffect Update {val} </h1>
        <button onClick={()=>setVal(val+1)}> Button</button>
    </div>
  )
}
export default UseEff;