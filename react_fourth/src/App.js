// //UseState And UseEffect Example
// import { useState , useEffect } from "react";

// function Counter() {
//   const [count, setCount] = useState(1);
//   const [name, setName] = useState("");

//   useEffect(() =>{
//     console.log("count increase" , count)
//   },[count])

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <input type="text" placeholder="Enter a text" value={name} onChange={(e) => setName(e.target.value)} />
//       <h1>My name is {name}</h1>
//     </div>
//   );
// }

// export default Counter;


//UseContext Example
// import Child from "./component/Child";
// import GrandChild from "./component/grandchild";
// import Reducer from "./component/Reducer";

// import { createContext } from "react";
// export const ThemeContext = createContext(); 

// function App() {
//   const theme = "dark";

//   return (
//     <>
    
//     <ThemeContext.Provider value={theme}>
//       <Child />
//       <GrandChild/>
//     </ThemeContext.Provider>
//      <Reducer/>
//      </>
//   );
// }

// export default App;


//UseMemo Example
// import { useState, useMemo } from "react";

// function App() {
//   const [number, setNumber] = useState(7);
//   const [count, setCount] = useState(0);

//   const squaredValue = useMemo(() => {
//     console.log("Expensive calculation...");'
//     return number * number;
//   }, [number]);

//   return (
//     <div>
//       <h3>Square: {squaredValue}</h3>

//       <button onClick={() => setCount(count + 1)}>
//         Re-render ({count})
//       </button>
//     </div>
//   );
// }

// export default App;


//UseCallback example
// import { useState, useCallback } from "react";

// function Child({ deepu }) {
//   console.log("Child rendered");
//   return <button onClick={deepu}>Click Child</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Button clicked");
//   }, []);

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <Child deepu={handleClick} />
//     </div>
//   );
// }

// export default App;



//UseRef Example
// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.select();
//   };

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={focusInput}>select</button>
//     </div>
//   );
// }
// export default App;













