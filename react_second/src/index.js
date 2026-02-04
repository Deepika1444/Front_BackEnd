// import react from "react";

import ReactDOM from 'react-dom/client';
import "./index.css"

// import Counter  from './components/UseEffect';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home';
// import About from './pages/about';
// import Contact from './pages/contact';
// import Layout from './pages/dashboard';
// import AboutDetails from './pages/AboutDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));


//This is just a JSX single element we use

// let name = <h1>Deepu</h1>
// root.render(name);



//This is just a JSX multiple element we use

// let name = (<div>
// <h1>Deepu</h1>
// <h2>Raju</h2>
// </div>)
// root.render( name );


//JSX converted into component (like using arrow function in function component)(2nd class)

// let NameComponents = () => {
//  return (<div>
//      <h1>Deepu</h1>
//      <h2>Raju</h2>
// </div>)
// }
// root.render(<NameComponents />);





// let varcountry = "INDIA"

// root.render(<NameComponents name={"Deepu"} age={"24"} somenumber={5*4}   country={varcountry}/>);

// root.render(<NameComponents box={"Red"}/>)


//Functional Components(2nd class)

// multiple jsx Elements use

// function Welcome() {
//     return (<>
//     <h1>Hai</h1>
//     <h2>Hello</h2>
//     </>)
// }
// root.render(<Welcome/>)

// single jsx Elements use

// function Welcome(){
//     return <h1>Hello</h1>
// }
// root.render(<Welcome/>);


//Class Component(2nd class)
// single jsx Elements use

// class Welcome extends Component{
//     render() {
//         return <h1>Hai</h1>
//     }
// }
// root.render(<Welcome/>)


// multiple jsx Elements use

// class Welcome extends Component {
//     render(){
//         return (<>
//             <h1>Hello</h1>
//             <h2>Hai</h2>
//         </>)
//     }
// }
// root.render(<Welcome/>)




//Routers in React(3rd class)

// const App = () => {
//     return(<>
    
//     <BrowserRouter>
//     <Routes>

//     <Route path="/" element={<Layout/>}>
           
//     <Route path="Home/:name" element={<Home/>} />

//     <Route path="about" element={<About />}>                              
//         <Route path="details" element={<AboutDetails />} />
//     </Route> 

//     <Route path="contact/contact" element={<Contact/>}/>

//     </Route>
//     </Routes>
//     </BrowserRouter>
//     </>)
// }
// root.render(<App/>);































// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( name );

