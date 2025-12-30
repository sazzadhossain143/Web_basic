// use react hooks

import React, {useState} from "react";

function Counter(){
    
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
    const reset = ()=>{
        setCount(0);
    }

    const [name, setName] = useState("");
    const displayName = (e)=>{
        setName(e.target.value);
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <button onClick={reset}>reset</button>
            <br />
            <input type="text" value={name} onChange={displayName} />
            <p>Name : {name}</p>
        </div>
    );
}

export default Counter