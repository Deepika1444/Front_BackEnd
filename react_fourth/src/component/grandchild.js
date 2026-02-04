// Child.js
import { useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext";
import { ThemeContext } from "../App";

function GrandChild() {
  const theme = useContext(ThemeContext);

  return <h2>The color is {theme}</h2>;
}

export default GrandChild;
