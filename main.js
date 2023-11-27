/* Esercizio 1 - Posts
Studiati come funzionano le API di https://jsonplaceholder.typicode.com/.
Crea una pagina HTML in cui, dopo aver richiesto dei post all’API, 
vengono create delle card nel documento: 
per ogni card mostra titolo e contenuto. */



window.addEventListener("load", () => {
  const input = document.getElementById("searchBar");
  const button = document.getElementById("searchButton");
  const div = document.getElementById("results");

  const results = (posts) => {
    console.log(posts);
    div.innerHTML = "";
    posts.forEach((cards) => {
      div.innerHTML += `
      <div>
        <p> Contenuto : ${cards.body}</p>
        <p> Titolo : ${cards.title}</p>
       </div>

         `;
    });
  };

  button.addEventListener("click", () => {
    const search = input.value;
    if (search === "") return;
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((response) => response.json())
      .then((obj) => results(obj))
      .catch((error) => console.error(error));
  });
});
