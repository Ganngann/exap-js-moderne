import Image from './Image'; // Charge Image
import galerieTemplate from './templates/galerie'; // Charge le template de la galerie

export default class Galerie { // Définit la propriété élément (el)
  constructor (data) { // data récupérées de l'instanciation new Galerie
    this.el = document.querySelector(data.el);
    this.listEl;
    this.images = []; // On met les données chargée ci dessous dans ce tableau vide.
    this.loadImages(data.images); // On charge les données des images pour hydrater this.images
    this.template = galerieTemplate;
    this.render(); // On lance la méthode render (éffectue le rendu)
  }

  // METHODE loadImages
    // But => Parcour tous les images pour en faire des objet de type Image
  loadImages (images) {
    for (let image of images) {
      this.images.push(new Image({parent: this, image})); //dans (image));, on envois un tableau de type json avec 4 propriétés (id, src, alt, content)
    }
  }
  render () {
    this.el.innerHTML = this.template;
    // L'élément .image-list existe pour le naviguateur
       this.listEl = this.el.querySelector('.image-list');

    // On demande à chacun des images de faire un render, donc de s'affciher
    for (let image of this.images) {
      image.render();
    }
  }
}
