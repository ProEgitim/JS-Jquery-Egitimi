class Storage {
  static add(newfilm) {
    let films = this.getItems();
    films.push(newfilm);

    localStorage.setItem("film", JSON.stringify(films));
  }

  static remove(title) {
    let films = this.getItems();
    films.forEach(function (f, index) {
      if (f.title === title) {
        films.splice(index, 1);
      }
    });

    localStorage.setItem("film", JSON.stringify(films));
  }
  static removeAll() {
    localStorage.removeItem("film");
  }

  static getItems() {
    let films;
    if (localStorage.getItem("film") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("film"));
    }

    return films;
  }
}
