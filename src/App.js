import "./App.css";

import HelloWord from "./components/HelloWord";
import JsEmbedtoJSX from "./components/JsEmbedtoJSX";
import ReactList from "./components/ReactList";
import ItemPropsData from "./components/ItemPropsData";

function App() {
  return (
    <div className="App">
      <HelloWord />
      <br />
      <JsEmbedtoJSX />
      <br />
      <ReactList />
      <br />
      <ItemPropsData />
    </div>
  );
}

export default App;
