import { useState } from "react";
import ImgTool from "./components/ImgTool";

//components
import Information2 from "./components/Information2";

function App2() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Information2 />
    </> 
  );
}

export default App2;
