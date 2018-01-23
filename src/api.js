const SEARCH_GITHUB_URL = 'https://api.github.com/search/repositories';


function getInfo(package) {
  return fetch(SEARCH_GITHUB_URL, {
    query: {
      q: package,
      page: 1,
      per_page: 1
    }
  })
  .then(res=>response.json())
  .then(res=>res)
  .catch(err=>err);
}

export default {
  getInfo
}