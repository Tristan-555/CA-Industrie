console.log("✅ panier.js est bien chargé !");

//bouton pour reset le panier
document.getElementById("reset-panier").addEventListener("click", function() {
  localStorage.clear();
  location.reload(); // Recharge la page pour remettre tous les compteurs à 0
});

//récupération des données
let Ctotal = parseInt(localStorage.getItem("Ctotal")) || 0;
let prixpanier = parseFloat(localStorage.getItem("prixPanier")) || 0; 

// Anciens produits
let compteur_Tshirt_Cool= parseInt(localStorage.getItem("compteur_Tshirt_Cool"))|| 0; 
let compteur_chaussettedufoh = parseInt(localStorage.getItem("compteur_chaussettedufoh"))|| 0; 
let compteur_casquette= parseInt(localStorage.getItem("compteur_casquette"))|| 0; 

// Nouveaux produits
let compteur_chaise = parseInt(localStorage.getItem("compteur_chaise")) || 0; 
let compteur_tapis = parseInt(localStorage.getItem("compteur_tapis")) || 0; 
let compteur_table = parseInt(localStorage.getItem("compteur_table")) || 0; 
let compteur_etagere = parseInt(localStorage.getItem("compteur_etagere")) || 0; // Sans accent
let compteur_canape = parseInt(localStorage.getItem("compteur_canape")) || 0; 
let compteur_fauteuil = parseInt(localStorage.getItem("compteur_fauteuil")) || 0; 


const Ctotalpanier = document.getElementById("Ctotalpanier");
const Affichageduprixtotal = document.getElementById("PrixTotPanier");
const AffichageText = document.getElementById("article")

// Anciens spans
const AffichageArticle0 = document.getElementById("article0")
const AffichageArticle1 = document.getElementById("article1")
const AffichageArticle2 = document.getElementById("article2")

// Nouveaux spans
const AffichageArticle3 = document.getElementById("article3")
const AffichageArticle4 = document.getElementById("article4")
const AffichageArticle5 = document.getElementById("article5")
const AffichageArticle6 = document.getElementById("article6")
const AffichageArticle7 = document.getElementById("article7")
const AffichageArticle8 = document.getElementById("article8")


if (prixpanier > 0){
  Ctotalpanier.textContent ="vous avez selectionné " + Ctotal + " articles au total";
  Affichageduprixtotal.textContent = prixpanier.toFixed(2) + " €";
  AffichageText.textContent = ""
}

// Affichage des anciens produits
if (compteur_Tshirt_Cool>0){
  AffichageArticle0.textContent = "x"+ compteur_Tshirt_Cool + " T-shirt Cool"
}
if (compteur_chaussettedufoh>0){
  AffichageArticle1.textContent = "x"+ compteur_chaussettedufoh + " Chaussette de foh"
}
if (compteur_casquette>0){
  AffichageArticle2.textContent = "x"+ compteur_casquette + " Casquette"
}

// Affichage des nouveaux produits (continuer la liste)
if (compteur_chaise>0){
  AffichageArticle3.textContent = "x"+ compteur_chaise + " Chaise"
}
if (compteur_tapis>0){
  AffichageArticle4.textContent = "x"+ compteur_tapis + " Tapis"
}
if (compteur_table>0){
  AffichageArticle5.textContent = "x"+ compteur_table + " Table"
}
if (compteur_etagere>0){
  AffichageArticle6.textContent = "x"+ compteur_etagere + " Étagère"
}
if (compteur_canape>0){
  AffichageArticle7.textContent = "x"+ compteur_canape + " Canapé"
}
if (compteur_fauteuil>0){
  AffichageArticle8.textContent = "x"+ compteur_fauteuil + " Fauteuil"
}


document.getElementById("payer").addEventListener("click", () => {
  // On récupère le panier depuis localStorage
  const panier = {
    // Anciens produits
    Tshirt_Cool: parseInt(localStorage.getItem("compteur_Tshirt_Cool")) || 0,
    chaussette_foh: parseInt(localStorage.getItem("compteur_chaussettedufoh")) || 0,
    casquette: parseInt(localStorage.getItem("compteur_casquette")) || 0,
    // Nouveaux produits pour le backend (NÉCESSAIRE)
    chaise: parseInt(localStorage.getItem("compteur_chaise")) || 0,
    tapis: parseInt(localStorage.getItem("compteur_tapis")) || 0,
    table: parseInt(localStorage.getItem("compteur_table")) || 0,
    etagere: parseInt(localStorage.getItem("compteur_etagere")) || 0,
    canape: parseInt(localStorage.getItem("compteur_canape")) || 0,
    fauteuil: parseInt(localStorage.getItem("compteur_fauteuil")) || 0
  };

  // On envoie le panier au backend Stripe
  fetch("https://backend-ca-3v8m.onrender.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(panier)
  })
  .then(response => response.json())
  .then(data => {
    if (data.url) {
      // Redirection vers Stripe Checkout
      window.location.href = data.url;
    } else {
      alert("Erreur : impossible de démarrer le paiement.");
    }
  })
  .catch(error => {
    console.error("Erreur :", error);
  });
});