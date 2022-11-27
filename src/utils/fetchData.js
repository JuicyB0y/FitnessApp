export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fd8d41db5bmsh348c37db9527d59p171ab7jsnc0e7b3c90081',
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_AP_RAPID_API_KEY,
    'X-RapidAPI-Key': 'fd8d41db5bmsh348c37db9527d59p171ab7jsnc0e7b3c90081',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
