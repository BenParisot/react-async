export const getQuotes = (count = 10) => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch quote';
      return json;
    });
};
  
