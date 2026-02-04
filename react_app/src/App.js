import { useState , useEffect} from "react";


function App() {
    const[count,setCount] = useState(0);
   

useEffect(() => 
{
  console.log("clicked",count);
});

return( 
    <div>
        <h2>count:{count}</h2>
        <button onClick={() =>setCount(count + 1)}>
        Increase
        </button>
        <button onClick={() =>setCount(count - 1)}>
        Decrease
        </button>
        <button onClick={() =>setCount(0)}>
        Reset
        </button>

    </div>
)
}

export default App;