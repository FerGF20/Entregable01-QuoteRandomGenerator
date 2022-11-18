const QuoteButton = ({getNewQuote, backgroundObject}) => {
  return (
    <button onClick={getNewQuote} style={backgroundObject}>
        <i className='bx bx-chevron-right'></i>
    </button>
  )
}

export default QuoteButton