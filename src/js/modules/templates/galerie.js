export default `
<!-- GALERIE TEMPLATE -->

<div class="slider fullsize">
   <div class="slides">
      <ul style="width: {{imageQt }}00%" class="image-list">
         <!-- RENDER IMAGE SLIDE -->
      </ul>
   </div>

   <div class="menu">
      <div class="slider-menu">
         <h1>Titre</h1>
         <ul class="slides image-menu">
            <!-- RENDER MENU IMAGE -->
         </ul>
      </div>
   </div>

   <!-- NAVIGATION -->
   <div class="navigation">
      <div>
         <ul class="navigation">

            <!-- BOUTON PREVIOUS -->
            <li class="previous">
              <a href="#"><i class="material-icons">fast_rewind</i></a>
            </li>

            <!-- BOUTON PLAY -->
            <li class="playPause">
               <a href="#"><i class="material-icons">play_circle_filled</i></a>
            </li>

            <!-- BOUTON NEXT -->
            <li class="next">
            <a href="#"><i class="material-icons">fast_forward</i></a>
            </li>

         </ul>
      </div>
   </div>
</div>
</div>
`;
