import { Test1 } from "./components/Test1";
import {Test2} from "./components/Test2"

function App(){
  return(
    <div>
      <Test/>
      <Test1/>
      <Test2/>
    </div>
  )
}
function Test(){
  return(
    <div>
      <h2>Nested function in ReactJs</h2>
    </div>
  )
}
export default App;