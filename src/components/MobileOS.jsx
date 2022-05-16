import React from "react";

const MobileOS =() =>{
    let info =[
        "Android",
        "Blackberry",
        "Iphone",
        "windows Phone"
    ]

    // info.map((item)=>{
    //     <li>{item}</li>
    // })

    const infoOS=  info.map((item)=> <li>{item}</li>)
    
    return  <ul>{infoOS}</ul>;
}

const Tag1 = ()=>{
    return <h2>Mobile Operating System</h2>;
}


export {Tag1};
export default MobileOS;