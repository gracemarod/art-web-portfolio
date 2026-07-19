$(window).on('load',function(){
  // Also works with querySelectorAll
// const loadingScreens = document.querySelectorAll(".loading-screen");
gsap.config({nullTargetWarn:false})
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
})

$(function(){
  $('.menubar').on("click", function(e) {
    e.preventDefault();
    var navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.classList.contains('responsive')) {
      navbarLinks.classList.remove('responsive');
    }else navbarLinks.classList.add('responsive');
  });
 }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})

$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);

})

const galleries = [
  { id:"#traditional", 
    items: [{src: 'Charco_Azul.jpg', srct:'thumbnails/tn_Charco_Azul.jpg', description: '#traditional', title:'Charco Azul - Colored Pencils', },
      {src: 'PlayaDeLasMujeres2024.jpg', srct:'thumbnails/tn_PlayaDeLasMujeres2024.jpg', description: '#traditional', title:'Playa de las Mujeres - Watercolor (2023)', },
      {src: 'PlayaEscambron_05-2024.jpg', srct:'thumbnails/tn_PlayaEscambron_05-2024.jpg', description: '#traditional', title:'Playa Escambron - Watercolor (2024)', },
      {src: 'PlayaEscambron_12-2024.jpg', srct:'thumbnails/tn_PlayaEscambron_12-2024.jpg', description: '#traditional', title:'Playa Escambron - Watercolor (2024)', },
      {src: 'At_the_High_Line_Observation_Deck.jpeg', srct:'thumbnails/tn_At_the_High_Line_Observation_Deck.jpeg', description: '#traditional', title:'At the High Line Observation Deck - Merkers (2023)', },
      {src: 'Purrject_Rebuild_Concept_Art.jpg', srct: 'thumbnails/RebuildtheWorldCA1T.jpg', description: '#traditional', title:'Concept Art of Purrject Rebuild - Watercolor and Colored Pencils (2025)'},
  ]}, 
  { id: "#life_drawing",
    items: [{src: 'LifeDrawing.jpeg', srct: 'thumbnails/tn_Life_Drawing2.jpeg', description: '#life_drawing', title:'1 hour Figure Drawing Study - Pencil (2024)'},
      // {src: 'LifeDrawing2_2023.jpg', srct:'thumbnails/tn_LifeDrawing2_2023.jpg', description: '#life_drawing', title:'10 Minutes Life Drawing - Ink (2023)', },
      {src: 'LifeDrawing3_2023.jpg', srct:'thumbnails/tn_LifeDrawing3_2023.jpg', description: '#life_drawing', title:'10 Minutes Life Drawing - Markers (2023)', },
      // {src: 'LifeDrawing4_2023.jpg', srct:'thumbnails/tn_LifeDrawing4_2023.jpg', description: '#life_drawing', title:'5 Minutes Life Drawing - Ink (2023)', },
      {src: 'LifeDrawing6_2023.jpg', srct:'thumbnails/tn_LifeDrawing6_2023.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Markers and Colored Pencils (2023)', },
      // {src: 'LifeDrawing16_2026.jpg', srct:'thumbnails/tn_LifeDrawing16_2026.jpg', description: '#life_drawing', title:'2 Minutes Life Drawing - Charcoal (2026)', },
      {src: 'LifeDrawing17_2026.jpg', srct:'thumbnails/tn_LifeDrawing17_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Charcoal (2026)', },
      {src: 'LifeDrawing18_2026.jpg', srct:'thumbnails/tn_LifeDrawing18_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Charcoal (2026)', },
      {src: 'LifeDrawing5_2023.jpg', srct:'thumbnails/tn_LifeDrawing5_2023.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Markers (2023)', },
      {src: 'LifeDrawing7_2023.jpg', srct:'thumbnails/tn_LifeDrawing7_2023.jpg', description: '#life_drawing', title:'10 Minutes Life Drawing - Markers (2023)', },
      {src: 'LifeDrawing8_2023.jpg', srct:'thumbnails/tn_LifeDrawing8_2023.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Markers (2023)', },
      {src: 'LifeDrawing9_2026.jpg', srct:'thumbnails/tn_LifeDrawing9_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Watercolors (2026)', },
      {src: 'LifeDrawing10_2026.jpg', srct:'thumbnails/tn_LifeDrawing10_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Watercolors (2026)', },
      {src: 'LifeDrawing11_2026.jpg', srct:'thumbnails/tn_LifeDrawing11_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Pencil (2026)', },
      {src: 'LifeDrawing12_2026.jpg', srct:'thumbnails/tn_LifeDrawing12_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Pencil (2026)', },
      {src: 'LifeDrawing13_2026.jpg', srct:'thumbnails/tn_LifeDrawing13_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Charcoal (2026)', },
      {src: 'LifeDrawing14_2026.jpg', srct:'thumbnails/tn_LifeDrawing14_2026.jpg', description: '#life_drawing', title:'5 Minutes Life Drawing - Charcoal (2026)', },
      {src: 'LifeDrawing15_2026.jpg', srct:'thumbnails/tn_LifeDrawing15_2026.jpg', description: '#life_drawing', title:'2 Minutes Life Drawing - Charcoal (2026)', },
]}, 
  { id: "#digital",
    items: [{src: 'Purrject_Grace_Avatar.png', srct: 'thumbnails/Grace_AvatarT.png', description: '#digital', title:'Grace Rodriguez, Lego Style (2025)'},
      {src: 'Purrject_Libby_Avatar.png', srct: 'thumbnails/Libby_AvatarT.png', description: '#digital', title:'Libby, Lego Style (2025)'},
      {src: 'Purrject_Moe_avatar2.png', srct: 'thumbnails/Moe_avatar2T.png', description: '#digital', title:'Moe Aguilar, Lego Style (2025)'},
      {src: 'Purrject_Paco_Avatar.png', srct: 'thumbnails/Paco_AvatarT.png', description: '#digital', title:'Paco Mireles, Lego Style (2025)'},
    ]}
];

function displayGallery(galleryId, items){
  return $(galleryId).nanogallery2({
    itemsBaseURL: './images/portfolio/',
    thumbnailHeight:  'auto XS80 SM120',
    thumbnailWidth:   '300 XSauto SMauto',

    //Settings for images thumbnails
    galleryMaxRows: 4,
    galleryDisplayMode: 'rows',
    thumbnailLabel: {
      position: 'overImageOnBottom'
    },
    thumbnailHoverEffect2: 'toolsSlideUp|scale120',
    thumbnailAlignment: 'center',
    thumbnailLevelUp: true,
    thumbnailOpenImage: true,
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,
    touchAnimation: true,
    touchAutoOpenDelay: 500,
    // Settings for Navigation Bar and Tags
    galleryFilterTags: false,
    galleryFilterTags: 'description',
    // galleryFilterTagsMode: 'multiple',
    // galleryL1FilterTagsMode: 'multiple',
    //settings for Lightbox
    viewerTools:    {
      topLeft:   'label',
      topRight: 'pageCounter, rotateLeft, rotateRight, fullscreenButton, closeButton'
    },
    galleryTheme: {
        navigationBar: { 
            background : '#8e61e1',
            borderRight: '5vw', 
            borderLeft: '50px'
        }
    },
    items: items
  })
}

//Go through the different Galleries
galleries.forEach(gallery => {
  console.log("hello");
  displayGallery(gallery.id, gallery.items);
});

  // $("#gmrgallery").nanogallery2({
  //   itemsBaseURL: './images/portfolio/',
  //   thumbnailHeight:  'auto XS80 SM120',
  //   thumbnailWidth:   '300 XSauto SMauto',

  //   //Settings for images thumbnails
  //   galleryMaxRows: 4,
  //   galleryDisplayMode: 'rows',
  //   thumbnailLabel: {
  //     position: 'overImageOnBottom'
  //   },
  //   thumbnailHoverEffect2: 'toolsSlideUp|scale120',
  //   thumbnailAlignment: 'center',
  //   thumbnailLevelUp: true,
  //   thumbnailOpenImage: true,
  //   thumbnailAlignment: 'scaled',
  //   thumbnailGutterWidth: 20,
  //   thumbnailGutterHeight: 20,
  //   touchAnimation: true,
  //   touchAutoOpenDelay: 500,
  //   // Settings for Navigation Bar and Tags
  //   galleryFilterTags: true,
  //   galleryFilterTags: 'description',
  //   galleryFilterTagsMode: 'multiple',
  //   galleryL1FilterTagsMode: 'multiple',
  //   //settings for Lightbox
  //   viewerTools:    {
  //     topLeft:   'label',
  //     topRight: 'pageCounter, rotateLeft, rotateRight, fullscreenButton, closeButton'
  //   },
  //   galleryTheme: {
  //       navigationBar: { 
  //           background : '#8e61e1',
  //           borderRight: '5vw', 
  //           borderLeft: '50px'
  //       }
  //   },
  //   items: [
  //     {src: 'Charco_Azul.jpg', srct:'thumbnails/tn_Charco_Azul.jpg', description: '#traditional', title:'Charco Azul - Colored Pencils', },
  //     {src: 'PlayaDeLasMujeres2024.jpg', srct:'thumbnails/tn_PlayaDeLasMujeres2024.jpg', description: '#traditional', title:'Playa de las Mujeres - Watercolor (2023)', },
  //     {src: 'PlayaEscambron_05-2024.jpg', srct:'thumbnails/tn_PlayaEscambron_05-2024.jpg', description: '#traditional', title:'Playa Escambron - Watercolor (2024)', },
  //     {src: 'PlayaEscambron_12-2024.jpg', srct:'thumbnails/tn_PlayaEscambron_12-2024.jpg', description: '#traditional', title:'Playa Escambron - Watercolor (2024)', },
  //     {src: 'At_the_High_Line_Observation_Deck.jpeg', srct:'thumbnails/tn_At_the_High_Line_Observation_Deck.jpeg', description: '#traditional', title:'At the High Line Observation Deck - Merkers (2023)', },
  //     {src: 'Purrject_Rebuild_Concept_Art.jpg', srct: 'thumbnails/RebuildtheWorldCA1T.jpg', description: '#traditional', title:'Concept Art of Purrject Rebuild - Watercolor and Colored Pencils (2025)'},
  //     {src: 'LifeDrawing.jpeg', srct: 'thumbnails/tn_Life_Drawing2.jpeg', description: '#life_drawing', title:'1 hour Figure Drawing Study - Pencil (2024)'},
  //     // {src: 'LifeDrawing2_2023.jpg', srct:'thumbnails/tn_LifeDrawing2_2023.jpg', description: '#life_drawing', title:'10 Minutes Life Drawing - Ink (2023)', },
  //     {src: 'LifeDrawing3_2023.jpg', srct:'thumbnails/tn_LifeDrawing3_2023.jpg', description: '#life_drawing', title:'10 Minutes Life Drawing - Markers (2023)', },
  //     // {src: 'LifeDrawing4_2023.jpg', srct:'thumbnails/tn_LifeDrawing4_2023.jpg', description: '#life_drawing', title:'5 Minutes Life Drawing - Ink (2023)', },
  //     {src: 'LifeDrawing6_2023.jpg', srct:'thumbnails/tn_LifeDrawing6_2023.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Markers and Colored Pencils (2023)', },
  //     // {src: 'LifeDrawing16_2026.jpg', srct:'thumbnails/tn_LifeDrawing16_2026.jpg', description: '#life_drawing', title:'2 Minutes Life Drawing - Charcoal (2026)', },
  //     {src: 'LifeDrawing17_2026.jpg', srct:'thumbnails/tn_LifeDrawing17_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Charcoal (2026)', },
  //     {src: 'LifeDrawing18_2026.jpg', srct:'thumbnails/tn_LifeDrawing18_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Charcoal (2026)', },
  //     {src: 'LifeDrawing5_2023.jpg', srct:'thumbnails/tn_LifeDrawing5_2023.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Markers (2023)', },
  //     {src: 'LifeDrawing7_2023.jpg', srct:'thumbnails/tn_LifeDrawing7_2023.jpg', description: '#life_drawing', title:'10 Minutes Life Drawing - Markers (2023)', },
  //     {src: 'LifeDrawing8_2023.jpg', srct:'thumbnails/tn_LifeDrawing8_2023.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Markers (2023)', },
  //     {src: 'LifeDrawing9_2026.jpg', srct:'thumbnails/tn_LifeDrawing9_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Watercolors (2026)', },
  //     {src: 'LifeDrawing10_2026.jpg', srct:'thumbnails/tn_LifeDrawing10_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Watercolors (2026)', },
  //     {src: 'LifeDrawing11_2026.jpg', srct:'thumbnails/tn_LifeDrawing11_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Pencil (2026)', },
  //     {src: 'LifeDrawing12_2026.jpg', srct:'thumbnails/tn_LifeDrawing12_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Pencil (2026)', },
  //     {src: 'LifeDrawing13_2026.jpg', srct:'thumbnails/tn_LifeDrawing13_2026.jpg', description: '#life_drawing', title:'20 Minutes Life Drawing - Charcoal (2026)', },
  //     {src: 'LifeDrawing14_2026.jpg', srct:'thumbnails/tn_LifeDrawing14_2026.jpg', description: '#life_drawing', title:'5 Minutes Life Drawing - Charcoal (2026)', },
  //     {src: 'LifeDrawing15_2026.jpg', srct:'thumbnails/tn_LifeDrawing15_2026.jpg', description: '#life_drawing', title:'2 Minutes Life Drawing - Charcoal (2026)', },

  //     {src: 'Purrject_Grace_Avatar.png', srct: 'thumbnails/Grace_AvatarT.png', description: '#digital', title:'Grace Rodriguez, Lego Style (2025)'},
  //     {src: 'Purrject_Libby_Avatar.png', srct: 'thumbnails/Libby_AvatarT.png', description: '#digital', title:'Libby, Lego Style (2025)'},
  //     {src: 'Purrject_Moe_avatar2.png', srct: 'thumbnails/Moe_avatar2T.png', description: '#digital', title:'Moe Aguilar, Lego Style (2025)'},
  //     {src: 'Purrject_Paco_Avatar.png', srct: 'thumbnails/Paco_AvatarT.png', description: '#digital', title:'Paco Mireles, Lego Style (2025)'},
  //      // {src: '', srct:'thumbnails/', description: '#traditional', title:'', }, 
  //   ]
  // })

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button'); // Your filter buttons
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter; // e.g., "game", "all", "3d-art"
      projectItems.forEach(item => {
        const itemCategories = item.dataset.category ? item.dataset.category.split(' ') : [];
        if (filter === 'all' || itemCategories.includes(filter)) {
          
          item.style.display = 'block'; // Or whatever shows the item
        } else {
          item.style.display = 'none'; // Or whatever hides the item
        }
      });
    });
  });
});
