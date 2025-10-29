console.log("✅ panier.js est bien chargé !");

//bouton pour reset le panier
document.getElementById("reset-panier").addEventListener("click", function() {
  localStorage.clear();
  location.reload(); // Recharge la page pour remettre tous les compteurs à 0
});

//récupération des données
let Ctotal = parseInt(localStorage.getItem("Ctotal")) || 0;
let prixpanier = parseFloat(localStorage.getItem("prixPanier")) || 0; 
let compteur_Tshirt_Cool= parseInt(localStorage.getItem("compteur_Tshirt_Cool"))|| 0; 
let compteur_chaussettedufoh = parseInt(localStorage.getItem("compteur_chaussettedufoh"))|| 0; 
let compteur_casquette= parseInt(localStorage.getItem("compteur_casquette"))|| 0; 
const Ctotalpanier = document.getElementById("Ctotalpanier");
const Affichageduprixtotal = document.getElementById("PrixTotPanier");
const AffichageText = document.getElementById("article")
const AffichageArticle0 = document.getElementById("article0")
const AffichageArticle1 = document.getElementById("article1")
const AffichageArticle2 = document.getElementById("article2")
if (prixpanier > 0){
  Ctotalpanier.textContent ="vous avez selectionné " + Ctotal + " articles au total";
  Affichageduprixtotal.textContent = prixpanier.toFixed(2) + " €";
  AffichageText.textContent = ""
}
if (compteur_Tshirt_Cool>0){
  AffichageArticle0.textContent = "x"+ compteur_Tshirt_Cool + " Tshirt Cool"
}
if (compteur_chaussettedufoh>0){
  AffichageArticle1.textContent = "x"+ compteur_chaussettedufoh + " Chaussette de foh"
}
if (compteur_casquette>0){
  AffichageArticle2.textContent = "x"+ compteur_casquette + " Casquette"
}

document.getElementById("payer").addEventListener("click", () => {
  // On récupère le panier depuis localStorage
  const panier = {
    Tshirt_Cool: parseInt(localStorage.getItem("compteur_Tshirt_Cool")) || 0,
    chaussette_foh: parseInt(localStorage.getItem("compteur_chaussettedufoh")) || 0,
    casquette: parseInt(localStorage.getItem("compteur_casquette")) || 0
  };

  // On envoie le panier au backend Stripe
  fetch("http://127.0.0.1:5000/create-checkout-session", {
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

