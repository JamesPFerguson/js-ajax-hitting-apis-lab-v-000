function getRepositories() {
  let username = document.getElementById('username').value
  let url = 'https://api.github.com/users' + username + '/repos'
  let req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories);
  req.open("GET", url);
  req.send();
}

function displayRepositories() {
  let repos = JSON.parse(this.responseText);
  let repoList = "<ul>" + repos.map(repo => {
    let username = repo.owner.login
    let reponame = repo.name
    return("<li>
    <h2>${repo.name}</h2>
            <a href="${repo.html_url}">${repo.html_url}</a><br>
            <a href="#" ${repoName} ${username} onclick="getCommits(this)">Get Commits</a><br>
          <a href="#" ${reponame} ${reponame} onclick="getBranches(this)">Get Branches</a></li>

    </li>"
    )
  }).join('') + "</ul>";
}
