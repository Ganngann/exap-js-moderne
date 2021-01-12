// Template d'une image du slide

export default `
<!-- IMAGE SLIDE  -->
<figure data-id="{{id}}">
   <img class="mySlides" src="{{src}}" alt="{{alt}}">
   <!-- Bouton d'informations sur la photo -->
   <figcaption>
      <a href="#" class="icon icon-info">
      <i class="material-icons">add_circle</i>
      </a>
      <div>{{content}}</div>
   </figcaption>
   <!-- /Bouton d'informations sur la photo -->
</figure>
`;
