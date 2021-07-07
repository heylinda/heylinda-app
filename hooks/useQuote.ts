import quotes from "../data/quotes";

export const useQuote = () => {
  const max = quotes.length - 1;
  const r = Math.floor(Math.random() * max);
  const item = quotes[r];
  const quote = item.text;
  const author = item.author;

  return {
    quote,
    author,
  };
};
