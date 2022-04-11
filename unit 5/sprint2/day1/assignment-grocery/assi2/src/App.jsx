import { Todo } from "./components/Grocery"     

import './App.css';


// app is parent todo is child 
function App() {

  return(
   <div className='App'>
     <h1>GROCERY LIST</h1>
     <Todo/>
   </div>
  )
}

export default App;
