import React from "react"


function FunctionClick(){
        const btnStyle ={
            color: "#000000",
            textTransform: "uppercase",
            textDecoration: "none",
            backGround: "#60a3bc",
            padding: "20px",
            borderRadius: "50px",
            border: "none",
        }

        function handleName(){
        const userName = prompt('Name of the profile user')
        alert(userName)

        }

    return (
        <div>
            <button style={btnStyle} onClick={handleName}>Click</button>
        </div>
    )
}


export default FunctionClick;