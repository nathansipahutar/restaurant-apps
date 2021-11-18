class JumbotronMain extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="jumbotron">
            <div id="content-home">
                <h2>There is no sincerer love than the love of food</h2>
                <p>Explore our restaurant in one click</p>
                <button id="buttonStart" onclick="window.location.href='#mainContent'">click here!</button>
            </div>
        </div>
          `;
  }
}

customElements.define('jumbotron-main', JumbotronMain);
