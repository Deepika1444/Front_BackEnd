import React from 'react';

// let NameComponents = (props) => {
//  return (<div>
//      <h1>Hello, {props.name} welcome to my home</h1>
//      <h1>You are, {props.age} years old and you are from {props.country}</h1>
//      <h1>   {props.somenumber} </h1>
// </div>)
// }


let GreenBox = () => {

    return <div style={{backgroundColor:"green", width:"100%", height:"100vh"}}>

    </div>
}


let RedBox = () => {

    return <div style={{backgroundColor:"red", width:"100%", height:"100vh"}}>

    </div>
}


let NameComponents = (props) => {
    return props.box === "Green" ? <GreenBox/> : <RedBox/>
}


export default NameComponents;