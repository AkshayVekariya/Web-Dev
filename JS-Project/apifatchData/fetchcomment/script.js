const comments = document.getElementById("show-comments");
const fetchData = fetch("https://jsonplaceholder.typicode.com/comments");

fetchData
  .then((Response) => {
    const jsonPromise = Response.json();
    jsonPromise
      .then((data) => {
        let html = "";
        for (const comment of data) {
          html += `
              <div class="card">
          <h2>Post ID:${comment.postId}</h2>
        <div class="post-info">
            <p><span>ID:</span>${comment.id}</p>
            <p><span>Name:</span>${comment.name}</p>
            <p><span>Email:</span> ${comment.email}</p>
        </div>
        <div class="post-body">
            <p>${comment.body}</p>
        </div>
        </div>
        `;
        }
        comments.innerHTML = html;
      })
      .catch((error) => {
        console.log("error", error);
      });
  })
  .catch((error) => {
    console.log("error", error);
  });
