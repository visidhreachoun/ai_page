import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <img
          src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
          width={150}
        />
        <div className="searchText">Search</div>
      </div>
    </>
  );
};

export default App;
