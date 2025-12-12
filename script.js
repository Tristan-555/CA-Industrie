// Configuration de tous les produits (Anciens + Nouveaux)
const productConfig = {
    // Produits existants dans index.html
    "T-shirt Cool": { key: "compteur_Tshirt_Cool", id: "compteur_Tshirt_Cool" },
    "chaussette de fockoffeur": { key: "compteur_chaussettedufoh", id: "compteur_chaussettedufoh" },
    "casquette": { key: "compteur_casquette", id: "compteur_casquette" },
    // Nouveaux produits pour groupe1.html
    "Chaise": { key: "compteur_chaise", id: "compteur_chaise" },
    "Tapis": { key: "compteur_tapis", id: "compteur_tapis" },
    "Table": { key: "compteur_table", id: "compteur_table" },
    "Étagère": { key: "compteur_etagere", id: "compteur_etagere" }, // Utilisation de 'etagere' sans accent pour la clé localStorage
    "Canapé": { key: "compteur_canape", id: "compteur_canape" },
    "Fauteuil": { key: "compteur_fauteuil", id: "compteur_fauteuil" },
    // Nouveaux produits pour groupe2.html
    "Lavabo": { key: "compteur_lavabo", id: "compteur_lavabo" },
    "Étagère Cuisine": { key: "compteur_etagere_cuisine", id: "compteur_etagere_cuisine" },
    "Table Cuisine": { key: "compteur_table_cuisine", id: "compteur_table_cuisine" },
    "Frigo": { key: "compteur_frigo", id: "compteur_frigo" },
    "Chaise Cuisine": { key: "compteur_chaise_cuisine", id: "compteur_chaise_cuisine" }
};

// Récupérer les éléments HTML globaux
const prixtotal = document.getElementById('total');
const totalaffichage = document.getElementById('Ctotalart');
const boutonsAjouter = document.querySelectorAll('.ajouter');
const boutonsRetirer = document.querySelectorAll('.retirer');

// Récupérer les valeurs globales sauvegardées
let Ctotal = parseInt(localStorage.getItem("Ctotal")) || 0;
let prixpanier = parseFloat(localStorage.getItem("prixPanier")) || 0; 
if (prixpanier < 0) { prixpanier = 0; }

// Fonction générique pour la mise à jour des compteurs (article + panier)
function updatePanier(productName, priceChange, isAdd) {
    const config = productConfig[productName];
    if (!config) return;

    let compteur = parseInt(localStorage.getItem(config.key)) || 0;
    
    // Logique d'ajout/retrait
    if (isAdd) {
        compteur++;
        Ctotal++;
        prixpanier += priceChange;
    } else if (compteur > 0) {
        compteur--;
        Ctotal--;
        prixpanier += priceChange; // priceChange est négatif pour un retrait
    }

    // Mise à jour de l'affichage local (sur la page produit actuelle)
    const affichageCompteur = document.getElementById(config.id);
    if (affichageCompteur) {
        affichageCompteur.textContent = compteur;
    }

    // Correction du prix si jamais il devient négatif par erreur
    if (prixpanier < 0) { prixpanier = 0; }
    
    // Mise à jour de l'affichage global du panier
    totalaffichage.textContent = Ctotal;
    prixtotal.textContent ="Total : " + prixpanier.toFixed(2) + " €";
    
    // Sauvegarder dans localStorage
    localStorage.setItem(config.key, compteur);
    localStorage.setItem("prixPanier", prixpanier);
    localStorage.setItem("Ctotal", Ctotal);
}

// 1. Initialisation des compteurs et affichage au chargement (pour le panier global)
prixtotal.textContent = "Total : " + prixpanier.toFixed(2) + " €";
totalaffichage.textContent = Ctotal;

// 2. Afficher les compteurs spécifiques pour les produits PRÉSENTS sur la page
for (const name in productConfig) {
    const config = productConfig[name];
    const affichageCompteur = document.getElementById(config.id);
    if (affichageCompteur) {
        let compteur = parseInt(localStorage.getItem(config.key)) || 0;
        affichageCompteur.textContent = compteur;
    }
}

// 3. Ajout des écouteurs d'événements (plus besoin d'indices !)
boutonsAjouter.forEach(button => {
    button.addEventListener("click", function() {
        const name = this.getAttribute("data-name");
        const price = parseFloat(this.getAttribute("data-price"));
        updatePanier(name, price, true); // true = isAdd
    });
});

boutonsRetirer.forEach(button => {
    button.addEventListener("click", function() {
        const name = this.getAttribute("data-name");
        const price = parseFloat(this.getAttribute("data-price")); 
        updatePanier(name, price, false); // false = isNotAdd (isRemove)
    });
});