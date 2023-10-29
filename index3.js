// Definisci una variabile per tenere traccia dello stato corrente
let statoCorrente = 0;

function cambiaContenutoH1() {
  // Seleziona il tag h1
  const h1 = document.querySelector("h1");

  // Definisci il contenuto alternativo
  const contenutiAlternativi = ["TECH PER ANZIANI", "TECNOLOGIA DI ALTRI TEMPI", "IL NEGOZIO DI SALVO"];

  // Cambia il contenuto dell'h1
  h1.textContent = contenutiAlternativi[statoCorrente];

  // Passa allo stato successivo
  statoCorrente = (statoCorrente + 1) % contenutiAlternativi.length;
}




// Aggiungi un event listener al pulsante per chiamare la funzione
const pulsante = document.querySelector("button");
pulsante.addEventListener("click", cambiaContenutoH1);

function submitComment() {
    // Recupera il testo dal campo di commento
    var comment = document.getElementById("comment-box").value;

    // Esegui ulteriori azioni come la validazione e il salvataggio (non implementate in questo esempio)

    // Stampa il commento nella console a scopo dimostrativo
    console.log("Commento inserito:", comment);
}





function cambiaColoreSfondo(colore) {
    document.body.style.backgroundColor = colore;
  }
  
  // Esempio di utilizzo:
  cambiaColoreSfondo("white");






  function cambiaIndirizzoFuturo(nuovoIndirizzo) {
    let futuroIndirizzo = nuovoIndirizzo;
    return futuroIndirizzo;
  }
  
  function cambiaIndirizzoFuturo(nuovoIndirizzo) {
    const addressElement = document.getElementById("indirizzoFuturo");
    if (addressElement) {
      addressElement.textContent = nuovoIndirizzo;
    }
  }
  // Utilizzo della funzione per cambiare l'indirizzo futuro
  const nuovoIndirizzo = " via Vattellappesca n° 10 Nel Paese Che Non C'è";
  cambiaIndirizzoFuturo(nuovoIndirizzo);
  





  
  function aggiungiClasseColoreVerdeAiLinkAmazon() {
    // Seleziona tutti gli elementi "a" con un attributo "href" contenente "amazon.com"
    const linkAmazon = document.querySelectorAll('a[href*="amazon.com"]');
  
    // Itera su ogni link Amazon e aggiungi la classe per il colore verde
    linkAmazon.forEach(function(link) {
      link.classList.add('colore-verde');
    });
  }
  
  // Chiamare la funzione per aggiungere la classe ai link Amazon
  aggiungiClasseColoreVerdeAiLinkAmazon();
  





  function toggleImageVisibility() {
    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (image.classList.contains('hidden')) {
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
    }
}







  function cambiaColorePrezzi() {
    // Seleziona tutti gli elementi con la classe "prezzo"
    const prezzi = document.querySelectorAll(".prezzo");
  
    // Itera attraverso ogni elemento prezzo e cambia il colore in uno casuale
    prezzi.forEach(prezzo => {
      const coloreCasuale = generaColoreCasuale();
      prezzo.style.color = coloreCasuale;
    });
  }
  
  function generaColoreCasuale() {
    const colore = "#" + Math.floor(Math.random() * 16777215).toString(16); // Genera un colore casuale in formato esadecimale
    return colore;
  }
  
  // Chiama la funzione al caricamento della pagina
  cambiaColorePrezzi();