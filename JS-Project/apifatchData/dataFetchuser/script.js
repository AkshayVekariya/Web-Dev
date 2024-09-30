const datarender = document.getElementById("data-fetch");
const userApiData = fetch("https://jsonplaceholder.typicode.com/users");

userApiData
  .then((Response) => {
    const jsonPromise = Response.json();
    jsonPromise
      .then((data) => {
        let html = "";
        for (const user of data) {
          html += `<tr>
          <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.address.street}</td>
            <td>${user.address.suite}</td>
            <td>${user.address.city}</td>
            <td>${user.address.zipcode}</td>
            <td>${user.address.geo.lat}</td>
            <td>${user.address.geo.lng}</td>
            <td>${user.company.name}</td>
            <td>${user.company.catchPhrase}</td>
            <td>${user.company.bs}</td>
            </tr>`;
        }
        datarender.innerHTML = html;
      })
      .catch((error) => {
        console.log("error", error);
      });
  })
  .catch((error) => {
    console.log("error", error);
  });
