export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3c2617a7cemshfabffab2e28f0bfp1f7377jsn0c92429c70ef',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };
  
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3c2617a7cemshfabffab2e28f0bfp1f7377jsn0c92429c70ef',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
  };
  
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  