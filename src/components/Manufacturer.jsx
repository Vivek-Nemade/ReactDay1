import React from "react";

const Manufacturer =() =>{
    let info =[
        "Samsung",
        "HTC",
        "Micromax",
        "apple"
    ]

    // info.map((item)=>{
    //     <li>{item}</li>
    // })

    const infoSupplier=  info.map((item)=> <li>{item}</li>)
    
    return  <ul>{infoSupplier}</ul>;
}

const Tag2 = ()=>{
    return <h2>Mobile Manufacturers</h2>;
}


export {Tag2};
export default Manufacturer;