import React,{useState} from 'react'
import { getQuote } from '../apis/fetchQuote';
import Button from "@mui/material/Button";
import "./Quote.css"

export const Quote = () => {

    const [quote, setQuote] =  useState('');

    const handleSubmit = () => {
      console.log("On submit")
      getQuote()
        .then((data) => {
            setQuote(data.content)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }
        
    return (
      <div>
        <div className="quote">{quote ? quote : "Click to Generate Quote"}</div>
        <div className='button-quote'>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            className="button-quote"
          >
            Generate Quote
          </Button>
        </div>
      </div>
    );
}
