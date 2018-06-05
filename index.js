function getRepositories() {
  let username = document.getElementById('username').value
  let url = 'https://api.github.com/users' + username + '/repos'
  let req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories);
  req.open("GET", url);
  req.send();
}
