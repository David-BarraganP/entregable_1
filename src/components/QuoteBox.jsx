import "./styles/QuoteBox.css"

const QuoteBox = ({quote, handleChangeQuote}) => {
    const {phrase, author} = quote

    


    
  return (
    <article className="quotebox">
        <div>
          <h1 className="quotebox__title">INFO-GALAX</h1>
        </div>
        <div className="quotebox__box">
            <p>{phrase}</p>
        </div>
        <button className="quotebox__btn" onClick={handleChangeQuote}>
            <img src="/bxs-rocket.svg" alt="" />
        </button >
      
        <div className="quotebox__author ">{author}</div>
        
      

    </article>
  )
}

export default QuoteBox

