import './App.css';
import {useState} from "react";

function App() {


  const [scorecount, setscorecount] = useState(76);
  const [wicketcount, setwicketcount] = useState(2);
  const [ballcount, setballcount] = useState(50);


  const handlScore = (value) => {
    setscorecount(scorecount + value);
  }

  const handlWicket = (value) => {
    setwicketcount(wicketcount + value);
  }

  const handleBall = (value) => {
    setballcount(ballcount + value);
  }

  

  return (
    <div className="App">
      <div className="div1">
        <div className="india">India</div>
        <div className="scoreboard">

          <div>
            <p>Score: </p>
            <div className="scoreCount">
              {
                scorecount
              }
            </div>
          </div>

          <div>
            <p>Wicket:</p>
            <div className="wicketCount">
              { wicketcount }
            </div>
          </div>

          <div>
            <p>Ball:</p>
            <div className="overCount">
              { ballcount }
            </div>
          </div>


        </div>

      </div>
      <div className="div2">
        <div className="addScore">
          <div className="addScore">Add Score:</div>
          <button className="addOne" onClick={() => {
            handlScore(1);
          }}>Add 1</button>
          <button className="addFour" onClick={() => {
            handlScore(4);
          }}>Add 4</button>
          <button className="addSix" onClick={() => {
            handlScore(6);
          }}>Add 6</button>

        </div>
        <div className="addWicket">
          <div>Add Wicket</div>
          <button onClick={() => {
            handlWicket(1);
          }}>Add 1</button>
        </div>
        <div className="addBall">
          <div>Add Ball</div>
          <button onClick={() => {
            handleBall(1);
          }}>Add 1</button>
        </div>

      </div>

      <h1 className="status">
        { scorecount > 100 ? "India Won" : "" }
      </h1>

    </div>
  );
}

export default App;