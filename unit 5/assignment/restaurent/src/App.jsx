import './App.css';
import { Addrestuarant } from "./components/addRestaurant";
import { GetData } from "./components/restaurantDetails";
import { useState } from "react";

function App() {

  const [displayForm, setDisplayForm] = useState(false)


  // useEffect(()=>{
  //   displayData();
  // },[displayForm])

  function toggleDisplay() {
    setDisplayForm(!displayForm);
  }

  return (
    <div className="App">
      <nav className='nav'>
        <h1>MultiRestaurant</h1>
        <h3>Get Your favourite food here.....</h3>
        <button onClick={() => {
          setDisplayForm(!displayForm);
        }} className="toggleForm">
          {displayForm ? "Home" : "Add Restaurant"}
        </button>
      </nav>



      {displayForm ? <Addrestuarant toggleDisplay={toggleDisplay} /> : <GetData toggleDisplay={toggleDisplay} />}
    </div>
  );
}

export default App;