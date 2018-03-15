const SEARCH_GITHUB_URL = 'https://api.github.com/search/repositories';


function getInfo(packageName) {
  return fetch(SEARCH_GITHUB_URL+'?q='+packageName+'&page=1&per_page=1')
  .then(res=>res.json())
  .then(res=>res)
  .catch(err=>err);
}

export default {
  getInfo
}