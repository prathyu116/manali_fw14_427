import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <Button variant={"primary"}>Primary Button</Button>
      <Button variant={"default"}>Default Button</Button>
      <Button variant={"dashed"}>Dashed Button</Button>
      <Button variant={"text"}>Text Button</Button>
      <Button variant={"link"}>Link Button</Button>
    </div>
  );
}

export default App;