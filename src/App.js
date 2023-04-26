import "./App.css";
import { Badge } from "reactstrap";
import FunctionHolder from "./Using-Props/FunctionHolder";
import Counter from "./Using-State/Counter";
import ConextState from "./Using-ContextApi/ConextState";
import Counter2 from "./Using-ContextApi/Counter2";
import Counter3 from "./Using-Reducer/Counter3";

function App() {
  return (
    <div className="App">
      <h1>
        <Badge color="dark">Counter App</Badge>
      </h1>
      {/* <------- Using State ---------->*/}
      <Counter />

      {/* <------- Using Props ---------->*/}
      <FunctionHolder />

      {/* <------- Using Context-Api ---------->*/}
      <ConextState><Counter2 /></ConextState>

      {/* <------- Using Reducer ---------->*/}
      <Counter3 />
    </div>
  );
}

export default App;
