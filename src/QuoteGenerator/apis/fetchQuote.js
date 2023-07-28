
const quoteUrl = 'https://api.quotable.io/random'

export const getQuote = async () =>{
    try {
    const response = await fetch(quoteUrl);
    if(!response.ok){
      throw new Error("Error fetching data:")
    }
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}