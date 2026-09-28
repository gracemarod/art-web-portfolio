
let cvsText = "Title,Category,Link,Image,AltText,Description,Role";
let projectsData = {
  p1:["Anamnesis","programming","./projects/Anamnesis.html","images/project-main/InteractiveStoryLabs.jpg","Photo of a Camera lens with an Oscar in the Center","A 14 week exploration of creating an interactive short film for Cavern that combines live-action and CGI.","Solo Programmer"],
  p2:["Purrject Rebuild","All,game,programmer,tech art","./projects/purrject_Rebuild.html","images/project-main/Purrject_Rebuild_Placeholder.png","Placeholder image for Purrject Rebuild","The aim of this LEGO Island is to develop an exploration and building game that supports cooperative play between neurodivergent and neurotypical players.","Technical Artist"],
  p3:["Vespa - Bat 3D Model","All,3DArt","./projects/Vespa_3D_Model.html","images/project-main/HeadshotWithRemesh.png","Placeholder image for Vespa 3D Model","Characer Design and 3D Model for Carnegie Mellon's Introduction to 3D Animation Pipeline Fall 2025.","3D Artist"],
  p4:["Monkeying Around","All,game,programming","./projects/Monkeying_Around.html","images/project-main/MonkeyingAround.png","Colorful title Monkeying Around and a monkey paw.","In this VR adventure, the player is a lost monkey plushie that must climb, through shelves in a toy store basement to reunite with it's mom.","Programmer and Environment Artist"],
  p5:["Cat-Go","All,game,3DArt","./projects/Cat_Go.html","images/project-main/Cat-Go.png","3D model of an old lady with a cat in a leash.","A two player game where a blindfolded player navigates a busy street using a DDR pad, guided by the other player who is a cat that communicates through body movement and meows.","3D and Light Artist"],
  p6:["2D Art","All,2DArt","./art-gallery.html","images/projects/DotsToDepth/Storyboards/tn_Dots_To_Depth_Storyboard1.jpg","Storyboard for Dots to Depth short film.","Gallery of storyboards, life drawings, landscapes and digital art.","2D Artist"]
};

            //   <!-- <div class="project-item" data-category="all game programming">
            //   <img src="images/project-main/Meltdown.jpg" alt="3D model of a Sandwich" class="project-image" />
            //   <div class="project-info">
            //     <h3 class="project-title">Meltdown</h3>
            //     <p class="project-description">Prepare patty melts in this sandwich resturant, using a custom sub stand with Xbox Adaptive Controllers.</p>
            //     <p class="project-role">Role: Progammer</p>
            //   </div>
            // </div>      -->

            // <!-- <div class="project-item" data-category="all game programming">
            //   <img src="images/project-main/TheSpaceGame.png" alt="3D model of an old lady with a cat in a leash." class="project-image" />
            //   <div class="project-info">
            //     <h3 class="project-title">The Space Game</h3>
            //     <p class="project-description">In this 2-player game, a VR astronaut repairs a damaged spaceship while a PC-based NAAA officer provides clues.</p>
            //     <p class="project-role">Role: VR Developer and Environment Artist</p>
            //   </div> -->

class ProjectsGalleryGrid extends HTMLElement {
    constructor() {
        super()
    }

  connectedCallback() {
    let projectGalleryString = `<div class="projects-gallery-v2">`;

    for (let i = 1; i <= Object.keys(projectsData).length; i++) {
      projectGalleryString +=
    `<div class="project-item" data-category="${projectsData[`p${i}`][1]}">
        <a href="${projectsData[`p${i}`][2]}">
            <img src="${projectsData[`p${i}`][3]}" alt="${projectsData[`p${i}`][4]}" class="project-image" />
        </a>
        <div class="project-info">
            <h3 class="project-title">${projectsData[`p${i}`][0]}</h3>
            <p class="project-description">${projectsData[`p${i}`][5]}</p>
            <p class="project-role">${projectsData[`p${i}`][6]}</p>
        </div>
    </div>`;
    }
    projectGalleryString += `</div>`;
    this.innerHTML = projectGalleryString;
  }
}
  
customElements.define('projects-gallery-grid', ProjectsGalleryGrid);