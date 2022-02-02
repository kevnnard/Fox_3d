import { useState } from "react";
import ImgTool from "./components/ImgTool";


//components
import Information3 from "./components/Information3";


function App3() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Information3 />
    </>
  );
}

export default App3;
