import { useState, useEffect } from "react";
import "./App.scss";
import { AdviceCard } from "./components";

const App = () => {
  const [advice, setAdvice] = useState([]);

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    setAdvice(data.slip);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main>
      <AdviceCard advice={advice} onClick={getAdvice} />
    </main>
  );
};

export default App;
