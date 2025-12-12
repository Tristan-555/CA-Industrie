console.log("✅ panier.js est bien chargé !");

//bouton pour reset le panier
document.getElementById("reset-panier").addEventListener("click", function() {
  localStorage.clear();
  location.reload(); // Recharge la page pour remettre tous les compteurs à 0
});

//récupération des données
let Ctotal = parseInt(localStorage.getItem("Ctotal")) || 0;
let prixpanier = parseFloat(localStorage.getItem("prixPanier")) || 0; 

// produits
let compteur_Tshirt_Cool= parseInt(localStorage.getItem("compteur_Tshirt_Cool"))|| 0; 
let compteur_chaussettedufoh = parseInt(localStorage.getItem("compteur_chaussettedufoh"))|| 0; 
let compteur_casquette= parseInt(localStorage.getItem("compteur_casquette"))|| 0; 
let compteur_chaise = parseInt(localStorage.getItem("compteur_chaise")) || 0; 
let compteur_tapis = parseInt(localStorage.getItem("compteur_tapis")) || 0; 
let compteur_table = parseInt(localStorage.getItem("compteur_table")) || 0; 
let compteur_etagere = parseInt(localStorage.getItem("compteur_etagere")) || 0; 
let compteur_canape = parseInt(localStorage.getItem("compteur_canape")) || 0; 
let compteur_fauteuil = parseInt(localStorage.getItem("compteur_fauteuil")) || 0; 
let compteur_lavabo = parseInt(localStorage.getItem("compteur_lavabo")) || 0; 
let compteur_etagere_cuisine = parseInt(localStorage.getItem("compteur_etagere_cuisine")) || 0; 
let compteur_table_cuisine = parseInt(localStorage.getItem("compteur_table_cuisine")) || 0; 
let compteur_frigo = parseInt(localStorage.getItem("compteur_frigo")) || 0; 
let compteur_chaise_cuisine = parseInt(localStorage.getItem("compteur_chaise_cuisine")) || 0;
let compteur_lit = parseInt(localStorage.getItem("compteur_lit")) || 0; 
let compteur_tapis_chambre = parseInt(localStorage.getItem("compteur_tapis_chambre")) || 0; 
let compteur_bureau = parseInt(localStorage.getItem("compteur_bureau")) || 0; 
let compteur_etagere_chambre = parseInt(localStorage.getItem("compteur_etagere_chambre")) || 0; 
let compteur_chaise_chambre = parseInt(localStorage.getItem("compteur_chaise_chambre")) || 0; 
let compteur_lavabo_salledebain = parseInt(localStorage.getItem("compteur_lavabo_salledebain")) || 0; 
let compteur_toilette = parseInt(localStorage.getItem("compteur_toilette")) || 0; 
let compteur_douche = parseInt(localStorage.getItem("compteur_douche")) || 0;

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
const AffichageArticle9 = document.getElementById("article9")
const AffichageArticle10 = document.getElementById("article10")
const AffichageArticle11 = document.getElementById("article11")
const AffichageArticle12 = document.getElementById("article12")
const AffichageArticle13 = document.getElementById("article13")
const AffichageArticle14 = document.getElementById("article14")
const AffichageArticle15 = document.getElementById("article15")
const AffichageArticle16 = document.getElementById("article16")
const AffichageArticle17 = document.getElementById("article17")
const AffichageArticle18 = document.getElementById("article18")
const AffichageArticle19 = document.getElementById("article19")
const AffichageArticle20 = document.getElementById("article20")
const AffichageArticle21 = document.getElementById("article21")

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
if (compteur_lavabo > 0){
  AffichageArticle9.textContent = "x"+ compteur_lavabo + " Lavabo"
}
if (compteur_etagere_cuisine > 0){
  AffichageArticle10.textContent = "x"+ compteur_etagere_cuisine + " Étagère (Cuisine)"
}
if (compteur_table_cuisine > 0){
  AffichageArticle11.textContent = "x"+ compteur_table_cuisine + " Table (Cuisine)"
}
if (compteur_frigo > 0){
  AffichageArticle12.textContent = "x"+ compteur_frigo + " Frigo"
}
if (compteur_chaise_cuisine > 0){
  AffichageArticle13.textContent = "x"+ compteur_chaise_cuisine + " Chaise (Cuisine)"
}
if (compteur_lit > 0){
  AffichageArticle14.textContent = "x"+ compteur_lit + " Lit"
}
if (compteur_tapis_chambre > 0){
  AffichageArticle15.textContent = "x"+ compteur_tapis_chambre + " Tapis (Chambre)"
}
if (compteur_bureau > 0){
  AffichageArticle16.textContent = "x"+ compteur_bureau + " Bureau"
}
if (compteur_etagere_chambre > 0){
  AffichageArticle17.textContent = "x"+ compteur_etagere_chambre + " Étagère (Chambre)"
}
if (compteur_chaise_chambre > 0){
  AffichageArticle18.textContent = "x"+ compteur_chaise_chambre + " Chaise (Chambre)"
}
// Affichage des nouveaux produits (Groupe 4 - Salle de bain)
if (compteur_lavabo_salledebain > 0){
  AffichageArticle19.textContent = "x"+ compteur_lavabo_salledebain + " Lavabo (Salle de bain)"
}
if (compteur_toilette > 0){
  AffichageArticle20.textContent = "x"+ compteur_toilette + " Toilette"
}
if (compteur_douche > 0){
  AffichageArticle21.textContent = "x"+ compteur_douche + " Douche"
}


document.getElementById("payer").addEventListener("click", () => {
  // On récupère le panier depuis localStorage
  const panier = {
    // Lignes 93-101 (produits existants) ...
    fauteuil: parseInt(localStorage.getItem("compteur_fauteuil")) || 0,
    // Produits Groupe 2
    lavabo: parseInt(localStorage.getItem("compteur_lavabo")) || 0,
    etagere_cuisine: parseInt(localStorage.getItem("compteur_etagere_cuisine")) || 0,
    table_cuisine: parseInt(localStorage.getItem("compteur_table_cuisine")) || 0,
    frigo: parseInt(localStorage.getItem("compteur_frigo")) || 0,
    chaise_cuisine: parseInt(localStorage.getItem("compteur_chaise_cuisine")) || 0,
    // Produits Groupe 3 (Chambre)
    lit: parseInt(localStorage.getItem("compteur_lit")) || 0,
    tapis_chambre: parseInt(localStorage.getItem("compteur_tapis_chambre")) || 0,
    bureau: parseInt(localStorage.getItem("compteur_bureau")) || 0,
    etagere_chambre: parseInt(localStorage.getItem("compteur_etagere_chambre")) || 0,
    chaise_chambre: parseInt(localStorage.getItem("compteur_chaise_chambre")) || 0,
    // Produits Groupe 4 (Salle de bain)
    lavabo_salledebain: parseInt(localStorage.getItem("compteur_lavabo_salledebain")) || 0,
    toilette: parseInt(localStorage.getItem("compteur_toilette")) || 0,
    douche: parseInt(localStorage.getItem("compteur_douche")) || 0,
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