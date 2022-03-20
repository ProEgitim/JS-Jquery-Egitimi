class Storage {
  static getSearchUsersFromStorage() {
    let users;
    if (localStorage.getItem("search") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("search"));
    }

    return users;
  }

  static addSearchUsersToStorage(userName) {
    let users = this.getSearchUsersFromStorage();
    if (users.indexOf(userName) === -1) {
      users.push(userName);
    }

    localStorage.setItem("search", JSON.stringify(users));
  }

  static clearAllUserFormStorage() {
    localStorage.removeItem("search");
  }
}
