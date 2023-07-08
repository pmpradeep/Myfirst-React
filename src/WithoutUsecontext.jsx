import { useState} from "react";


export default function Component1()
{
   
  const[user,setUser] = useState("Pradeep M")
    return(
        <div>
            <h1>Without Usecontext use props to pass state </h1>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </div>
    );
}

function Component2({user})
{
    return(
        <div>
            <h1>Component2</h1>
             <Component3 user={user} />
        </div>
    );
}

function Component3({user})
{
    return(
        <div>
            <h1>Component3</h1>
             <Component4 user={user}/>
        </div>
    );

}

function Component4({user})
{
    return(
        <div>
            <h1>Component4</h1>
            <h2>{`HELLO ${user}! Again`}</h2>
        </div>
    );
}


