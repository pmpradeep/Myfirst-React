
import React, {useState,useEffect} from "react";


function Hooks()
{
    const [color,Setcolor] = useState("orange") ;
    const[count,setCount] = useState(1);
    const [calc,setCalc]= useState(0);
    
    useEffect(()=> {
      setCalc(()=>count*5);
    },[count]);
    return(
        <div>
       
      <h1>My color is {color}!</h1>
       <button onClick ={() => Setcolor("green")}>green</button>
       <button onClick={ () => Setcolor("red")}>Red</button>
    
      <h3>Count is {count}</h3>
      <h3>Calc value {calc}</h3>
      <button onClick={() =>setCount((c) =>c+1)}>Count</button>
        </div>

 );

}

export default Hooks;