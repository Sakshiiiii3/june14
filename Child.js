import React from "react";
function Child(props){
    const name = "Sakshi";
    return(
        <div>
            <h2>User Name is : </h2>
            <button onClick={()=>props.data(name)}>Click</button>
        </div>
    )
}
export default Child