import { useState } from "react";

function ToggleText() {
    const [toggle, setToggle] = useState(false);
    const isToggle = ()=> {
        console.log(toggle);
        setToggle(!toggle);
    } 
    
    return (
        <>
         <button onClick={isToggle}> {toggle ? "Hide" : "Show"} </button>
        {toggle && <p> Welcome to Imagined Idea React Class!</p>}
        </>
       
    )
}

export default ToggleText;