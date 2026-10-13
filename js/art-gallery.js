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
  displayGallery(gallery.id, gallery.items);
});

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
