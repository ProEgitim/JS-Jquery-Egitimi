const form = document.getElementById("github-form");
const search = document.getElementById("githubname");
const clearUser = document.getElementById("clear-last-users");
const lastUser = document.getElementById("last-users");
const github=new GitHub();
const ui=new UI();
addEventListener();

function addEventListener() {
  form.addEventListener("submit", formSearch);
}

function formSearch(e) {
    
   let userName = search.value.trim();
  if (userName === "") {
    
    ui.displayMessage("Kullanıcı adı giriniz", "danger");
   } 
  else {
    
    github.getGitHubData(userName).then((response) => {
      if (response.user.message === "Not Found") {
        ui.displayMessage("Kullanıcı bulunmadı", "danger");
      } else {
        ui.appendRepos(response.repo);
        ui.appendUser(response.user);
        ui.appendSearch(userName);
        Storage.addSearchUsersToStorage(userName);
      }
    })
    .catch(err=> ui.displayMessage(err,"danger"));
  }
  search.value="";
  e.preventDefault();
}
