//import logo from './logo.svg';
import './App.css';

function App() {

  
  const oper=["a","b","c","d"];
  const manu=["mam","asd","adg","dh"];

  return (
    <div className="App">
     <h1>Hello</h1>
     <Firstheading/>

<Firstading/>
<ul>{oper.map((e)=>{
  return <Operatingsystem os={e}/>//key value
  
})}</ul>


    </div>
  );
}
let osheading=" Mobile Operating";

let mobile="manufacturing";

function Firstheading(){
  return  <h1>{osheading }</h1>
}
function Firstading(){
  return  <h1>{mobile }</h1>
}
function Operatingsystem({os}){
  console.log(os)
  return <li>{os}</li>
  
}

export default App;
