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

  $("#gmrgallery").nanogallery2({
    itemsBaseURL: './images/portfolio/',

    //Mosaic Settings for each image
   galleryMosaic : [                     
    { w: 2, h: 2, c: 1, r: 1 }, //MoriVivi
    { w: 2, h: 2, c: 3, r: 3 }, //HighLine
    { w: 1, h: 1, c: 5, r: 2 }, //1 hr Life Drawing
    { w: 1, h: 2, c: 3, r: 1 }, //Grace Avatar
    { w: 1, h: 2, c: 4, r: 1 }, //Libby Avatar
    { w: 1, h: 2, c: 2, r: 3 }, //Moe Avatar
    { w: 1, h: 2, c: 1, r: 3 }, //Paco Avatar
    { w: 1, h: 1, c: 5, r: 1 }, //Purrject_Rebuild_Concept_Art
  ],
   // layout for XS width
    galleryMosaicXS : [                    
    { w: 4, h: 5, c: 1, r: 1 }
  ],
   // layout for SM width
    galleryMosaicSM : [                    
    { w: 2, h: 2, c: 1, r: 1 },
    { w: 1, h: 1, c: 3, r: 1 },
    { w: 1, h: 1, c: 3, r: 2 },
    { w: 1, h: 2, c: 1, r: 3 },
    { w: 2, h: 3, c: 2, r: 3 },
  ],
    //Settings for images thumbnails
    galleryMaxRows: 1,
    galleryDisplayMode: 'rows',
    thumbnailLabel: {
      position: 'overImageOnBottom'
    },
    thumbnailHoverEffect2: 'toolsSlideUp|scale120',
    thumbnailAlignment: 'center',
    thumbnailLevelUp: true,
    thumbnailOpenImage: true,
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 2,
    thumbnailGutterHeight: 2,
    touchAnimation: true,
    touchAutoOpenDelay: 500,
    // Settings for Navigation Bar and Tags
    galleryFilterTags: true,
    galleryFilterTags: 'description',
    galleryFilterTagsMode: 'multiple',
    galleryL1FilterTagsMode: 'multiple',
    //settings for Lightbox
    viewerTools:    {
      topLeft:   'label',
      topRight: 'pageCounter, rotateLeft, rotateRight, fullscreenButton, closeButton'
    },
    galleryTheme: {
        navigationBar: { 
            background : '#8e61e1',
        },
    },
    items: [
      {src: 'Mori_Vivi_Forest_Pipes_Rendered.jpg', srct: 'thumbnails/tn_Mori_Vivi_Forest_Pipes_Rendered.jpg', description:'#digital', title:'The Hidden Pipes in Morivivi\'s Forest'},
      {src: 'At_the_High_Line_Observation_Deck.jpeg', srct:'thumbnails/tn_At_the_High_Line_Observation_Deck.jpeg', description: '#traditional', title:'At the High Line Observation Deck', },
      {src: 'Life_Drawing2.jpeg', srct: 'thumbnails/tn_Life_Drawing2.jpeg', description: '#figurative', title:'Long Pose Figure Drawing Study with Pencil'},
      {src: 'Grace_Avatar.png', srct: 'thumbnails/Grace_AvatarT.png', description: '#characterization', title:'Characterization of Grace Rodriguez in Lego style.'},
      {src: 'Libby_Avatar.png', srct: 'thumbnails/Libby_AvatarT.png', description: '#characterization', title:'Characterization of Libby in Lego style.'},
      {src: 'Moe_avatar2.png', srct: 'thumbnails/Moe_avatar2T.png', description: '#characterization', title:'Characterization of Moe Aguilar in Lego style.'},
      {src: 'Paco_Avatar.png', srct: 'thumbnails/Paco_AvatarT.png', description: '#characterization', title:'Characterization of Paco Mireles in Lego style.'},
      {src: 'Purrject_Rebuild_Concept_Art.jpg', srct: 'thumbnails/RebuildtheWorldCA1T.jpg', description: '#traditional', title:'Concept Art of Purrject Rebuild.'}
    ]
  })

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
