export var Attribute4;
(function (Attribute4) {
  Attribute4["nameprofile"] = "nameprofile";
  Attribute4["image"] = "image";
  Attribute4["followers"] = "followers";
})(Attribute4 || (Attribute4 = {}));
class MySuggestion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    const attrs = {
      nameprofile: null,
      image: null,
      followers: null,
    };
    return Object.keys(attrs);
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }
  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Suggestions/suggestion.css"> 
            <section>
                <img src=${this.image} alt="Profile image suggestion">
                <div>
                <p>${this.nameprofile}</p>
                <p class="followers">${this.followers}</p>
                </div>
            </section>
            `;
    }
  }
}
customElements.define("content-suggested", MySuggestion);
export default MySuggestion;
