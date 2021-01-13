import Image from "./Image"; // Charge Image

import GnObject from "./GnObject"; // classe générique

import galerieTemplate from "./templates/galerie"; // Charge le template de la galerie

export default class Galerie extends GnObject {
  // Définit la propriété élément (el)
  constructor(data) {
    super();
    // data récupérées de l'instanciation new Galerie
    this.imageQt = data.images.length;
    this.el = document.querySelector(data.el);
    this.documentTitle = document.title;
    this.sliderListEl;
    this.menuListEl;
    this.duree = 1000;
    this._position = 0;
    this.images = []; // On met les données chargée ci dessous dans ce tableau vide.
    this._loadImages(data.images); // On charge les données des images pour hydrater this.images
    this.template = galerieTemplate; // On charge le code html du template de la Galerie (via import ci dessus)
    this.render();
    this.h1 = this.el.querySelector(".slider-menu h1");
    this._display_slide();
    this.timer;
  }

  // METHODE loadImages - Chargement des images sous formes d'objets de type Image dans this.images
  // But => Parcour tous les images pour en faire des objet de type Image
  _loadImages(images) {
    for (let image of images) {
      this.images.push(
        new Image({
          parent: this,
          image,
        })
      ); //dans (image));, on envois un tableau de type json avec 4 propriétés (id, src, alt, content)
    }
  }

  // RENDU GALERIE ----------
  render() {
    // cette fonction générique tmplReplace() est issue de la classe parente GnObject et permet de se passer du bloc de code ci-dessous
    this.template = this.tmplReplace(this.template);
    // this.tmplReplace(this.template)
    // for (let propriete in this) {
    //   this.template = this.template.replace(
    //     "{{" + propriete + "}}",
    //     this[propriete]
    //   );
    // }

    this.el.innerHTML = this.template; // On met le template sur l'element sur lequel on a greffer l'application
    // L'élément .image-list et .image-menu existe pour le naviguateur

    // Activation des éléments intéractifs
    this._activateButtons();

    this.renderImgSlide();
    this.renderImgMenu();
  }

  // RENDU IMAGE SLIDE ----------
  renderImgSlide() {
    this.sliderListEl = this.el.querySelector(".image-list");
    // Rendu des images - On demande à chacun des images de faire un render, donc de s'affciher
    for (let image of this.images) {
      image.imageRender();
    }
  }

  // RENDU IMAGE MENU ----------
  renderImgMenu() {
    this.menuListEl = this.el.querySelector(".image-menu");
    for (let image of this.images) {
      image.menuRender();

      // activation du bouton du menu
      image.elMenu.querySelector("a").onclick = (e) => {
        this._position = image.id - 1;
        this._display_slide();
      };
    }
  }
  //------------------------------------------------------------------------------

  _activateButtons() {
    // Activation de l'input navigation
    this.el.querySelector(".next").onclick = (e) => {
      this._next();
    };
    // Activation de l'input navigation
    this.el.querySelector(".playPause").onclick = (e) => {
      this._play();
      this.timer
        ? (e.target.innerHTML = "pause_circle_filled")
        : (e.target.innerHTML = "play_circle_filled");
    };
    // Activation de l'input navigation
    this.el.querySelector(".previous").onclick = (e) => {
      this._previous();
    };
  }

  // BOUTON NEXT ----------
  _next() {
    this._position + 1 < this.images.length
      ? (this._position += 1)
      : (this._position = 0);

    this._display_slide();
  }

  // BOUTON PLAY ----------
  _play() {
    !this.timer
      ? (this.timer = setInterval(() => {
          this._next();
        }, this.duree))
      : this._stop();
  }

  // BOUTON PREVIOUS ----------
  _previous() {
    this._position > 0
      ? (this._position -= 1)
      : (this._position = this.images.length - 1);

    this._display_slide();
    console.log(this);
  }

  // BOUTON STOP ----------
  _stop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  _display_slide() {
    this.sliderListEl.style.left = "-" + this._position + "00%";
    this.h1.innerText = this.images[this._position].alt;
    document.title =
      this.documentTitle + " - " + this.images[this._position].alt;
  }
}
