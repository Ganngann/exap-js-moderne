import imageTemplate from "./templates/image"; // On importe imageTemplate
import menuTemplate from "./templates/menu"; // On importe imageTemplate
import GnObject from "./GnObject"; // classe génériquee

// data: {
//   parent: Galerie,
//   image: {id: 1, src: "./assets/slides/image2.jpg", alt: "A cat game", content: "Lorem Ipsum..."}
// }

export default class Image extends GnObject {
  constructor(data) {
    super();
    this.elSlide;
    this.elMenu;
    this.parent = data.parent;
    this.id = data.image.id; // Ton id (id de class Image), est égal à l'id de image
    this.src = data.image.src;
    this.alt = data.image.alt;
    this.href = data.image.href;
    this.content = data.image.content;
    this.templateImgSlide = imageTemplate;
    this.templateImgMenu = menuTemplate;
  }

  /* On crée le render après car dans le constructor on a pas encore
     de code HTML du template, quand on le push, le code HTML se construit apres. */

  // Rendu d'une image
  menuRender() {
    // On transforme le this.template |  Je remplace les données statique par les données de Image
    // On parcourt toutes les propriétés - d'un Objet(in) - d'un Tableau(of) | this c'est l'objet

    // cette fonction générique tmplReplace() est issue de la classe parente GnObject et permet de se passer du bloc de code ci-dessous
    this.templateImgMenu = this.tmplReplace(this.templateImgMenu);
    // for (let propriete in this) {
    //   this.templateImgMenu = this.templateImgMenu.replace(
    //     "{{" + propriete + "}}",
    //     this[propriete]
    //   );
    // }

    // CONSTRUCTION D'UNE IMG MENU
    this.elMenu = document.createElement("li"); // Création du nouveau li
    this.elMenu.innerHTML = this.templateImgMenu; // .. A la place d'afficher un Coucou on aura le template d'une image ..

    this.parent.menuListEl.appendChild(this.elMenu); // .. et il va venir l'ajouter a la Galerie
  }

  imageRender() {
    // cette fonction générique tmplReplace() est issue de la classe parente GnObject et permet de se passer du bloc de code ci-dessous
    this.templateImgSlide = this.tmplReplace(this.templateImgSlide);
    // for (let propriete in this) {
    //   // On parcour toutes les propriétés | this c'est l'objet
    //   this.templateImgSlide = this.templateImgSlide.replace(
    //     "{{" + propriete + "}}",
    //     this[propriete]
    //   );
    //   //this.templateImgMenu = this.templateImgMenu.replace('{{'+propriete+'}}', this[propriete]);
    // }

    // CONSTRUCTION D'UNE IMG SLIDE
    this.elSlide = document.createElement("li"); // Création du nouveau li
    this.elSlide.classList.add("slide"); // class slide au nouveau élément li
    this.elSlide.innerHTML = this.templateImgSlide; // .. A la place d'afficher un Coucou on aura le template d'une image ..
    this.setInfoButton();
    this.parent.sliderListEl.appendChild(this.elSlide); // .. et il va venir l'ajouter a la Galerie
  }
  setInfoButton() {
    this.elSlide.querySelector(".icon.icon-info").onclick = (e) => {
      if (this.elSlide.querySelector("figcaption").style.right !== "0px") {
        this.elSlide.querySelector("figcaption").style.right = "0px";
        e.target.innerHTML = "remove_circle";
        console.log(this.parent._position);
      } else {
        this.elSlide.querySelector("figcaption").style.right = "-20%";
        e.target.innerHTML = "add_circle";
      }
    };
  }
}
