
  // navigation bar
  class NavBar extends HTMLElement {
    constructor() {
        super()
    }

  connectedCallback() {
    this.innerHTML = 
    `<div id="navigation-content">
        <div id="navbar-links" class="navigation-links">
          <a href="../index.html" data-text="HOME" id="home-link">HOME</a>
          <a href="../index.html#projects" data-text="PROJECTS" id="home-link">PROJECTS</a>
          <a href="../index.html#about" data-text="ABOUT" id="about-link">ABOUT</a>
          <a href="../contact-me.html" data-text="CONTACT" id="contact-link">CONTACT</a>
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