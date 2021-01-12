import images   from './data'; // Importation des données des images
import Galerie  from './modules/Galerie'; // On charge Galerie.js


// Instanciation (Création) d'un nouvel objet de type Galerie
  // On lui envois un élément et des données images

new Galerie({
  el: '#app', // On colle notre Galerie sur le el
  images // Envois de Données (ces données devrait venir de la db normalement)
});
