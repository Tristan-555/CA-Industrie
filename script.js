// Récupérer les éléments HTML
const lienPanier = document.getElementById('lien-panier');
const prixtotal = document.getElementById('total');
const boutonsAjouter = document.querySelectorAll('.ajouter');
const boutonsRetirer = document.querySelectorAll('.retirer');
const totalaffichage = document.getElementById('Ctotalart');
const affichage_compteur_Tshirt_Cool  = document.getElementById('compteur_Tshirt_Cool')
const affichage_chaussettedufoh = document.getElementById('compteur_chaussettedufoh')
const affichage_casquette = document.getElementById('compteur_casquette')
let Ctotal = parseInt(localStorage.getItem("Ctotal")) || 0;
let prixpanier = parseFloat(localStorage.getItem("prixPanier")) || 0; 
let compteur_Tshirt_Cool= parseInt(localStorage.getItem("compteur_Tshirt_Cool"))|| 0; 
let compteur_chaussettedufoh = parseInt(localStorage.getItem("compteur_chaussettedufoh"))|| 0; 
let compteur_casquette= parseInt(localStorage.getItem("compteur_casquette"))|| 0; 
// Afficher les valeurs sauvegardées au chargement
prixtotal.textContent = "Total : " + prixpanier.toFixed(2) + " €";
totalaffichage.textContent = Ctotal;
affichage_compteur_Tshirt_Cool.textContent = compteur_Tshirt_Cool
affichage_chaussettedufoh.textContent = compteur_chaussettedufoh
affichage_casquette.textContent = compteur_casquette

// bouton ajouter au panier pour le Tshirt Cool
boutonsAjouter[0].addEventListener("click",function(){
    compteur_Tshirt_Cool++;
    affichage_compteur_Tshirt_Cool.textContent = compteur_Tshirt_Cool;
    // ici on s'occupe de l'affichage du panier, plus précisémment le nombre d'article total du panier
    Ctotal++           
    totalaffichage.textContent = Ctotal;
    // on s'occupe d'afficher le bon prix total du panier
    const prix = parseFloat(this.getAttribute("data-price"));
    prixpanier += prix;
    prixtotal.textContent ="Total : " + prixpanier.toFixed(2) + " €"
    // Sauvegarder dans localStorage
    localStorage.setItem("prixPanier", prixpanier);
    localStorage.setItem("Ctotal", Ctotal);
    localStorage.setItem("compteur_Tshirt_Cool", compteur_Tshirt_Cool);
})
// bouton retirer au panier le Tshirt Cool
boutonsRetirer[0].addEventListener("click",function(){
    if (compteur_Tshirt_Cool > 0) {
      compteur_Tshirt_Cool--;
      affichage_compteur_Tshirt_Cool.textContent = compteur_Tshirt_Cool;
      // ici on s'occupe de l'affichage du panier, plus précisémment le nombre d'article total du panier
      Ctotal--
      totalaffichage.textContent = Ctotal;
      // on s'occupe d'afficher le bon prix total du panier
      const prix = parseFloat(this.getAttribute("data-price"));
      prixpanier += prix;
      prixtotal.textContent = "Total : " + prixpanier.toFixed(2) + " €"
      // Sauvegarder dans localStorage
      localStorage.setItem("prixPanier", prixpanier);
      localStorage.setItem("Ctotal", Ctotal);
      localStorage.setItem("compteur_Tshirt_Cool", compteur_Tshirt_Cool);
    }
})

// bouton ajouter au panier pour les chaussettes de foh
boutonsAjouter[1].addEventListener("click",function(){
    compteur_chaussettedufoh++;
    affichage_chaussettedufoh.textContent = compteur_chaussettedufoh;
    // ici on s'occupe de l'affichage du panier, plus précisémment le nombre d'article total du panier
    Ctotal++           
    totalaffichage.textContent = Ctotal;
    // on s'occupe d'afficher le bon prix total du panier
    const prix = parseFloat(this.getAttribute("data-price"));
    prixpanier += prix;
    prixtotal.textContent ="Total : " + prixpanier.toFixed(2) + " €"
    // Sauvegarder dans localStorage
    localStorage.setItem("prixPanier", prixpanier);
    localStorage.setItem("Ctotal", Ctotal);
    localStorage.setItem("compteur_chaussettedufoh", compteur_chaussettedufoh);
})
// bouton retirer au panier les chaussettes de foh
boutonsRetirer[1].addEventListener("click",function(){
    if (compteur_chaussettedufoh > 0) {
      compteur_chaussettedufoh--;
      affichage_chaussettedufoh.textContent = compteur_chaussettedufoh;
      // ici on s'occupe de l'affichage du panier, plus précisémment le nombre d'article total du panier
      Ctotal--
      totalaffichage.textContent = Ctotal;
      // on s'occupe d'afficher le bon prix total du panier
      const prix = parseFloat(this.getAttribute("data-price"));
      prixpanier += prix;
      prixtotal.textContent = "Total : " + prixpanier.toFixed(2) + " €"
      // Sauvegarder dans localStorage
      localStorage.setItem("prixPanier", prixpanier);
      localStorage.setItem("Ctotal", Ctotal);
      localStorage.setItem("compteur_chaussettedufoh", compteur_chaussettedufoh);
    }
})


// bouton ajouter au panier pour les casquettes
boutonsAjouter[2].addEventListener("click",function(){
    compteur_casquette++;
    affichage_casquette.textContent = compteur_casquette;
    // ici on s'occupe de l'affichage du panier, plus précisémment le nombre d'article total du panier
    Ctotal++           
    totalaffichage.textContent = Ctotal;
    // on s'occupe d'afficher le bon prix total du panier
    const prix = parseFloat(this.getAttribute("data-price"));
    prixpanier += prix;
    prixtotal.textContent ="Total : " + prixpanier.toFixed(2) + " €"
    // Sauvegarder dans localStorage
    localStorage.setItem("prixPanier", prixpanier);
    localStorage.setItem("Ctotal", Ctotal);
    localStorage.setItem("compteur_casquette", compteur_casquette);
})
// bouton retirer au panier les casquettes
boutonsRetirer[2].addEventListener("click",function(){
    if (compteur_casquette > 0) {
      compteur_casquette--;
      affichage_casquette.textContent = compteur_casquette;
      // ici on s'occupe de l'affichage du panier, plus précisémment le nombre d'article total du panier
      Ctotal--
      totalaffichage.textContent = Ctotal;
      // on s'occupe d'afficher le bon prix total du panier
      const prix = parseFloat(this.getAttribute("data-price"));
      prixpanier += prix;
      prixtotal.textContent = "Total : " + prixpanier.toFixed(2) + " €"
      // Sauvegarder dans localStorage
      localStorage.setItem("prixPanier", prixpanier);
      localStorage.setItem("Ctotal", Ctotal);
      localStorage.setItem("compteur_casquette", compteur_casquette);
    }
})





