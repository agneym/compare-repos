const SEARCH_GITHUB_URL = 'https://api.github.com/search/repositories';


function getInfo(packageName) {
  return fetch(SEARCH_GITHUB_URL+'?q='+packageName+'&page=1&per_page=1')
  .then(res=>response.json())
  .then(res=>res)
  .catch(err=>err);
}

function mockEndPoint() {
  return new Promise((resolve, reject)=>resolve({
    "total_count": 403,
    "incomplete_results": false,
    "items": [
      {
        "id": 38934449,
        "name": "react-redux",
        "full_name": "reactjs/react-redux",
        "owner": {
          "login": "reactjs",
          "id": 6412038,
          "avatar_url": "https://avatars3.githubusercontent.com/u/6412038?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/reactjs",
          "html_url": "https://github.com/reactjs",
          "followers_url": "https://api.github.com/users/reactjs/followers",
          "following_url": "https://api.github.com/users/reactjs/following{/other_user}",
          "gists_url": "https://api.github.com/users/reactjs/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/reactjs/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/reactjs/subscriptions",
          "organizations_url": "https://api.github.com/users/reactjs/orgs",
          "repos_url": "https://api.github.com/users/reactjs/repos",
          "events_url": "https://api.github.com/users/reactjs/events{/privacy}",
          "received_events_url": "https://api.github.com/users/reactjs/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/reactjs/react-redux",
        "description": "Official React bindings for Redux",
        "fork": false,
        "url": "https://api.github.com/repos/reactjs/react-redux",
        "forks_url": "https://api.github.com/repos/reactjs/react-redux/forks",
        "keys_url": "https://api.github.com/repos/reactjs/react-redux/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/reactjs/react-redux/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/reactjs/react-redux/teams",
        "hooks_url": "https://api.github.com/repos/reactjs/react-redux/hooks",
        "issue_events_url": "https://api.github.com/repos/reactjs/react-redux/issues/events{/number}",
        "events_url": "https://api.github.com/repos/reactjs/react-redux/events",
        "assignees_url": "https://api.github.com/repos/reactjs/react-redux/assignees{/user}",
        "branches_url": "https://api.github.com/repos/reactjs/react-redux/branches{/branch}",
        "tags_url": "https://api.github.com/repos/reactjs/react-redux/tags",
        "blobs_url": "https://api.github.com/repos/reactjs/react-redux/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/reactjs/react-redux/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/reactjs/react-redux/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/reactjs/react-redux/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/reactjs/react-redux/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/reactjs/react-redux/languages",
        "stargazers_url": "https://api.github.com/repos/reactjs/react-redux/stargazers",
        "contributors_url": "https://api.github.com/repos/reactjs/react-redux/contributors",
        "subscribers_url": "https://api.github.com/repos/reactjs/react-redux/subscribers",
        "subscription_url": "https://api.github.com/repos/reactjs/react-redux/subscription",
        "commits_url": "https://api.github.com/repos/reactjs/react-redux/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/reactjs/react-redux/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/reactjs/react-redux/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/reactjs/react-redux/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/reactjs/react-redux/contents/{+path}",
        "compare_url": "https://api.github.com/repos/reactjs/react-redux/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/reactjs/react-redux/merges",
        "archive_url": "https://api.github.com/repos/reactjs/react-redux/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/reactjs/react-redux/downloads",
        "issues_url": "https://api.github.com/repos/reactjs/react-redux/issues{/number}",
        "pulls_url": "https://api.github.com/repos/reactjs/react-redux/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/reactjs/react-redux/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/reactjs/react-redux/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/reactjs/react-redux/labels{/name}",
        "releases_url": "https://api.github.com/repos/reactjs/react-redux/releases{/id}",
        "deployments_url": "https://api.github.com/repos/reactjs/react-redux/deployments",
        "created_at": "2015-07-11T17:32:01Z",
        "updated_at": "2018-01-23T16:09:35Z",
        "pushed_at": "2018-01-23T11:32:11Z",
        "git_url": "git://github.com/reactjs/react-redux.git",
        "ssh_url": "git@github.com:reactjs/react-redux.git",
        "clone_url": "https://github.com/reactjs/react-redux.git",
        "svn_url": "https://github.com/reactjs/react-redux",
        "homepage": "http://redux.js.org/docs/basics/UsageWithReact.html",
        "size": 722,
        "stargazers_count": 10931,
        "watchers_count": 10931,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 1769,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 15,
        "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit"
        },
        "forks": 1769,
        "open_issues": 15,
        "watchers": 10931,
        "default_branch": "master",
        "score": 58.003983
      }
    ]
  }));
}

export default {
  getInfo,
  mockEndPoint
}