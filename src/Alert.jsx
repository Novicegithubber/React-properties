import React from "react"


function FunctionClick(){

        function handleName(){
        const userName = prompt('Name of the profile user')
        alert(userName)

        }

    return (
        <div>
            <button onClick={handleName}>Click</button>
        </div>
    )
}


export default FunctionClick;