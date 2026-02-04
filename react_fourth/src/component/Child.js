// Child.js
import { useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext";
import { ThemeContext } from "../App";

function Child() {
  const theme = useContext(ThemeContext);

  return <h2>Theme is {theme}</h2>;
}

export default Child;
