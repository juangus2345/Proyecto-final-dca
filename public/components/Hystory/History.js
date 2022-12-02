export var Attribute3;
(function (Attribute3) {
  Attribute3["userhistory"] = "userhistory";
  Attribute3["imagehistory"] = "imagehistory";
})(Attribute3 || (Attribute3 = {}));
class MyHistory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    const attrs = {
      userhistory: null,
      imagehistory: null,
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
            <link rel="stylesheet" href="./components/Hystory/history.css"> 
            <section>
            <div class="historyy">
                <img class = "imagen" src = ${this.imagehistory} alt="" tabindex="0"></img> 
                <h2 class = "username">${this.userhistory}</h2>
            </div>    
            </section>
            `;
    }
  }
}
customElements.define("my-history", MyHistory);
export default MyHistory;
