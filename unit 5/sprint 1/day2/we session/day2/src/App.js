//import logo from './logo.svg';
import './App.css';

function App() {

  
  const oper=["Android","blackberry","iPhone","Windows Phones"];
  const manu=["Samsung","HTc","Micromax","Apple"];

  return (
    <div className="App">
     
     <Firstheading/>
     <ul>{oper.map((el)=>{
  return <Operatingsyste o={el}/>//key value
  
})}</ul>

<Firstading/>
<ul>{manu.map((e)=>{
  return <Operatingsystem os={e}/>//key value
  
})}</ul>



    </div>
  );
}
let osheading=" Mobile Operating System";

let mobile="Mobile Manufacturer";

function Firstheading(){
  return  <h1>{osheading }</h1>
}
function Firstading(){
  return  <h1>{mobile }</h1>
}
function Operatingsystem({os}){
  //console.log(os)
  return <li>{os}</li>
  
}
function Operatingsyste({o}){
  //console.log(os)
  return <li>{o}</li>
  
}


export default App;
