/* Crea una pagina HTML in cui l’utente può inserire del testo ed effettuare una ricerca
 di paesi a partire dalla lingua. Dopo che l’utente ha scritto del testo e 
 dato conferma d’invio (con un bottone), interroga l’API e crea una lista di cards,
  di cui ciascuna card è un risultato della ricerca. 
  Ogni card rappresenta un paese cercato a partire dalla stringa inserita dall’utente 
  (una lingua parlata nel paese). */

window.addEventListener("load", () => {
  const input = document.getElementById("searchBar");
  const button = document.getElementById("searchButton");
  const div = document.getElementById("results");

  const results = (countries) => {
    console.log(countries);
    countries.forEach((country) => {
      document.body.innerHTML = `
      <div>
     <p> Country: ${country.name.common} ${country.population} ${country.flag} </p>
     </div>
     `;
    });
  };

  button.addEventListener("click", () => {
    const search = input.value;
    if (search === "") return; 
    fetch(`https://restcountries.com/v3.1/lang/${search}`)
      .then((response) => response.json())
      .then((obj) => results(obj))
      .catch((error) => console.error(error));
  });
});

/* const p = document.createElement("p"); // Crea un nuovo elemento paragrafo per ogni paese
      p.textContent = `Country: ${country.name.common}`; // Aggiungi il nome del paese al paragrafo
      div.appendChild(p); // Aggiungi il paragrafo alla div dei risultati */

/* 
      window.addEventListener("load", () => { // Aggiunge un listener per l'evento di caricamento della finestra
        const input = document.getElementById("searchBar"); // Ottiene il riferimento all'elemento con ID "searchBar"
        const button = document.getElementById("searchButton"); // Ottiene il riferimento all'elemento con ID "searchButton"
        const div = document.getElementById("results"); // Ottiene il riferimento all'elemento con ID "results"
      
        const results = (countries) => { // Definisce una funzione chiamata 'results' che accetta l'array di paesi
          console.log(countries); // Stampa l'array dei paesi nella console
          div.innerHTML = ""; // Svuota il contenuto dell'elemento div
      
          countries.forEach((country) => { // Itera attraverso ogni elemento nell'array 'countries'
            const { population, flag } = country; // Destructuring per estrarre le proprietà 'population' e 'flag' dall'oggetto 'country'
            div.innerHTML = `
              <p> Country: ${country.name.common} ${population} ${flag} </p>
            `; // Crea un nuovo paragrafo all'interno dell'elemento div per mostrare il nome comune del paese, la popolazione e la bandiera
          });
        };
      
        button.addEventListener("click", () => { // Aggiunge un listener per l'evento di click sul pulsante
          const search = input.value; // Ottiene il valore inserito nell'input
      
          if (search === "") return; // Se l'input è vuoto, esce dalla funzione
      
          fetch(`https://restcountries.com/v3.1/lang/${search}`) // Esegue una richiesta GET all'API Rest Countries per ottenere i dati dei paesi
            .then((response) => response.json()) // Converte la risposta in formato JSON
            .then((obj) => results(obj)) // Chiama la funzione 'results' con i dati ottenuti dall'API
            .catch((error) => console.error(error)); // Gestisce eventuali errori mostrandoli nella console
        });
      }); */
