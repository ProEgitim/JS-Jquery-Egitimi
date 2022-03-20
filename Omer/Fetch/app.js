let albums;
const request = new Request();
request
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    albums = data;

    const container = document.getElementById("cardbody");
    //console.log(albums);
    albums.forEach(function (album) {
      container.innerHTML += ` <div class="card mt-5">
    <h5 class="card-header">${album.title}</h5>
    <div class="card-body">
      <p class="card-text">
    ${album.body}
      </p>
    </div>
  </div>`;
    });


  })
  .catch((err) => console.log(err));


  request.post("https://jsonplaceholder.typicode.com/posts",{userId:1905,title:"Deneme",body:"bpdy deeyryyyy"});
  request.put("https://jsonplaceholder.typicode.com/posts/1",{userId:1905,title:"Deneme",body:"bpdy deeyryyyy"});
  request.delete("https://jsonplaceholder.typicode.com/posts/1");


