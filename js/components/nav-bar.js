
  // navigation bar
  class NavBar extends HTMLElement {
    constructor() {
        super()
    }
  

  connectedCallback() {
    this.innerHTML = 
    `<div id="navigation-content">
        <div id="navbar-links" class="navigation-links">
          <a href="./index.html" data-text="HOME" id="home-link">HOME</a>
          <a href="#projects" data-text="PROJECTS" id="home-link">PROJECTS</a>
          <a href="./art-gallery.html" data-text="PORTFOLIO" id="portfolio-link">ART PORTFOLIO</a>
          <a href="#about" data-text="ABOUT" id="about-link">ABOUT</a>
          <a href="#contact" data-text="CONTACT" id="contact-link">CONTACT</a>
          <a href="https://drive.google.com/file/d/1jDiT6LBT8F3XrnhIf0IYOXThO4Rs0mbH/view?usp=sharing" data-text="RESUME" id="about-link">RESUME</a>
        </div>
          <div class="menubar">
            <span class="first-span"></span>
            <span class="second-span"></span>
            <span class="third-span"></span>
          </div>
      </div>`;
  }
}
  
customElements.define('navbar-component', NavBar);