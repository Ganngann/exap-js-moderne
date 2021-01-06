import imageTemplate from './templates/image'; // On importe imageTemplate

// data: {
//   parent: Galerie,
//   image: {id: 1, src: "./assets/slides/image2.jpg", alt: "A cat game", content: "Lorem Ipsum..."}
// }

export default class Image {
  constructor (data) {
    this.parent = data.parent;
    this.id = data.image.id; // Ton id (id de class Image), est égal à l'id de image
    this.src = data.image.src;
    this.alt = data.image.alt;
    this.content = data.image.content;
    this.template = imageTemplate;
  }
  /* On crée le render après car dans le constructor on a pas encore
     de code HTML du template, quand on le push, le code HTML se construit apres. */
  render () { // Quand je demande a une image de faire un render ..
  // On va transformer le this.template
  // Je remplace les données statique par les données de Image
    // this.template = this.template.replace('{{id}}', this.id); // On va remplacer (replace) les {{id}} par this.id
    // this.template = this.template.replace('{{src}}', this.src);
    // this.template = this.template.replace('{{alt}}', this.alt);
    // this.template = this.template.replace('{{content}}', this.content); // idem que id
  //OU BOUCLE

  // for (let propriete in this) { // On parcour toutes les propriétés | this c'est l'objet
  //     this.template = this.template.replace('{{'+propriete+'}}', this.[propriete]);
  //   }
  //
  //   const newImage = document.createElement('div'); // .. Il va créer un nouveau div ..
  //   newImage.innerHTML = this.template; // .. A la place d'afficher un Coucou on aura le template d'une image ..
  //   this.parent.listEl.appendChild(newImage); // .. et il va venir l'ajouter a la Galerie
  //   propriete.render;
  // }
  //
  for (let propriete in this) { // On parcour toutes les propriétés | this c'est l'objet
      this.template = this.template.replace('{{'+propriete+'}}', this[propriete]);
    }

    const newImage = document.createElement('div'); // .. Il va créer un nouveau div ..
    newImage.innerHTML = this.template; // .. A la place d'afficher un Coucou on aura le template d'une image ..
    this.parent.listEl.appendChild(newImage); // .. et il va venir l'ajouter a la Galerie
  }
}
