import {distanceInWordsToNow} from 'date-fns';

export default [
  {
    name: 'name',
    link: 'html_url',
    header: 'Name'
  },
  {
    name: 'description',
    link: null,
    header: 'Description'
  },
  {
    name: 'created_at',
    link: null,
    header: 'Created At',
    applyFn: (date)=>distanceInWordsToNow(new Date(date))
  },
  {
    name: 'homepage',
    link: 'homepage',
    header: 'Home Page' 
  },
  {
    header: 'Language',
    link: null,
    name: 'language'
  },
  {
    header: 'Stargazers',
    name: 'stargazers_count',
    link: null
  },
  {
    header: 'Watchers',
    name: 'watchers_count',
    link: null
  },
  {
    header: 'Forks',
    name: 'forks_count',
    link: 'forks_url'
  },
  {
    header: 'Open Issues',
    name: 'open_issues_count',
    link: null
  }
]