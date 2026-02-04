// import { useEffect, useState } from "react";

// const HooksExample = () => {
//   const [count, setCount] = useState(0);
//   const [now, setNow] = useState(() => new Date());

//   useEffect(() => {
//     const id = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>Hooks Example</h1>
//       <p>Time: {now.toLocaleTimeString()}</p>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>Add</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// };

// export default HooksExample;
