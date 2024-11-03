import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IMCCalculadora from "./components/imcCalculadora";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IMCCalculadora />
    </>
  );
}

export default App;
