import "./App.css";
import { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/random";



const bgs = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7"];
const vgs = ["vg1", "vg2", "vg3", "vg4"];

function App() {
 

  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrenBg] = useState(getRandomElement(bgs));
  const [currentVg, setCurrenVg] = useState(getRandomElement(vgs));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrenBg(getRandomElement(bgs));
    setCurrenVg(getRandomElement(vgs));
  };

  return (
    <>
    
      <main className={`app ${currentBg}`}>
        <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} />
        <div className={currentVg}></div>
      </main>
    </>
  );
}

export default App;
