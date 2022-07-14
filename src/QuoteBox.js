import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

const QuoteBox = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "90e3be91famsh03858a16db5ecd3p14ff02jsn06a67bbc53c2",
      "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com"
    }
  };

  const getQuotes = () => {
    fetch(
      "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=1",
      options
    )
      .then((res) => res.json())
      .then((json) => {
        setQuote({
          items: json,
          DataisLoaded: true
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const [quote, setQuote] = useState([]);
  const [activeState, setActiveState] = useState(false);

  console.log(quote);

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (!quote.DataisLoaded)
    return (
      <div>
        <h1> Loading.... </h1>{" "}
      </div>
    );

  const clickHandler = () => {
    getQuotes();
  };

  return (
    <div
      className="container"
      style={{ background: activeState ? randomColor : randomColor }}
    >
      <div id="quote-box">
        <h1 id="text">{quote.items[0].quote}</h1>
        <div className="author-container">
          <p id="author">{quote.items[0].author}</p>
        </div>
        <div className="bottom-container">
          <button id="new-quote" onClick={clickHandler}>
            New quote
          </button>
          <div className="socials">
            <a
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a id="fb-quote" href="https://facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
