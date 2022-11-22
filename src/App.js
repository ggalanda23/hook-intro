import './App.css';
import { useState } from "react";
import Counter from './component/Counter';
import Cat from './component/Cat';

function App() {

const [ toggle , setToggle] = useState(true);

const handleToggle = () => {
  setToggle((prevToggle) => !prevToggle );
}
return (
<div className="App">
  <button onClick={handleToggle}>{toggle ? "Hide" : "Show"} Counter</button>
  <p>{toggle ? "show me" : "hide me"}</p>
  {toggle && <Cat/>}
</div>
)
}
export default App;
