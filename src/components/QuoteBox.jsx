import QuoteButton from "./QuoteButton";

const QuoteBox = ({quote, getNewQuote, backgroundObject, fontColor}) => {

  return (
    <article className="quoteBox">
      <i className='bx bxs-quote-left' style={fontColor}></i>
      <p style={fontColor}>{quote.quote}</p>
      <h4 style={fontColor}>{quote.author}</h4>
      <QuoteButton getNewQuote={getNewQuote} backgroundObject={backgroundObject}/>
    </article>
  )
}

export default QuoteBox