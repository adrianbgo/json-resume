import { useState } from "react";
import Resume from "./views/resume";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Resume />
    </div>
  );
}

export default App;
