import QuoteBox from "./components/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors"
import { useState } from "react";

function App() {
  const getRandom = (array) => {
    const randomIndex = Math.floor(Math.random()*array.length)
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(quoteDB))
  const [color, setColor] = useState(getRandom(colors))

  const getNewQuote = () =>{
    const newQuote = getRandom(quoteDB)
    const newColor = getRandom(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObject = {
    backgroundColor: color
  }

  const fontColor = {
    color: color
  }

  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox
        quote={quote}
        getNewQuote={getNewQuote}
        backgroundObject={backgroundObject}
        fontColor={fontColor}
      />
    </div>
  )
}

export default App
