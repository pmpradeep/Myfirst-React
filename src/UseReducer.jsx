import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0;

        default :
        throw new Error("Unexpected action");

    }
};

function UseReducer()
{
    const [count,dispatch] =useReducer(reducer,initialState);

    return(
    <div>
         <h1>UseReducer</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=> dispatch("add")}>Add</button>

        <button onClick={()=>dispatch("subtract")}>Sub</button>

        <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>  
    );
}

export default UseReducer;
