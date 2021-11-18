class FooterSect extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="footer">
        <p> FooDex &copy; 2021, Nathanael Boan Tua Sipahutar </p>
      </div>
    `;
  }
}

customElements.define('footer-sect', FooterSect);
