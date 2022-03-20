class UI {
  constructor() {
    this.profileDiv = document.getElementById("profile");
    this.repoDiv = document.getElementById("repos");
    this.lastUsers = document.getElementById("last-users");
  }

  appendUser(user) {
    this.profileDiv.innerHTML = `
    <div class="row">
      <div class="col-md-4">
          <img src="${user.avatar_url}" style="width: 150px; height: 150px;" alt="">
          <hr>
          <p class="fw-bold">${user.name}</p>
          <hr>
          <p>${user.bio}</p>
      </div>
      <div class="col-md-8">
          <div class="d-flex">
              <button class="btn btn-info btn-sm m-1">Takipçi ${user.followers}</button>
              <button class="btn btn-info btn-sm m-1">Takip Edilen ${user.following}</button>
              <button class="btn btn-danger btn-sm m-1">Raporlar ${user.public_repos}</button>
          </div>
          <hr>
          <div class="">
              <div class="">
                  <span><i class="icon"></i> ${user.company}</span>
              </div>
              <div class="">
                  <span><i class="icon"></i> ${user.location}</span>
              </div>
              <div class="">
                  <span><i class="icon"></i> ${user.email}</span>
              </div>
          </div>
      </div>
    </div>`;
  }

  appendRepos(repos) {
    this.repoDiv.innerHTML = "";
    repos.forEach((repo) => {
      this.repoDiv.innerHTML += `<div class="d-flex mb-2">
         <div class="col-md-2">
             <a href="${repo.html_url}" class="text-success text-decoration-none fw-bold">${repo.name}</a>
         </div>
         <div class="col-md-6">
             <button class="btn btn-secondary btn-sm">Starlar ${repo.stargazers_count}</button>
             <button class="btn btn-info btn-sm">Forklar ${repo.forks_count}</button>
         </div>
     </div>`;
    });
  }

  displayMessage(message, type) {
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);
  }

  appendSearch(userName) {
    let users = Storage.getSearchUsersFromStorage();
    if (users.indexOf(userName) === -1) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = username;
      this.lastUsers.appendChild(li);
    }
  }

  clearAllSearchFromUI() {
    while (this.lastUsers.firstElementChild !== null) {
      this.lastUsers.removeChild(this.lastUsers.firstElementChild);
    }
  }
}
