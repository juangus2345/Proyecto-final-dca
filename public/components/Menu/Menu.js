export var Attribute2;
(function (Attribute2) {
  Attribute2["addimg"] = "addimg";
  Attribute2["sendmenuimg"] = "sendmenuimg";
  Attribute2["exploreimg"] = "exploreimg";
  Attribute2["homeimg"] = "homeimg";
  Attribute2["likemenuimg"] = "likemenuimg";
  Attribute2["perfilmenuimg"] = "perfilmenuimg";
  Attribute2["instagramimg"] = "instagramimg";
})(Attribute2 || (Attribute2 = {}));
class MyMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    const attrs = {
      addimg: null,
      sendmenuimg: null,
      exploreimg: null,
      homeimg: null,
      likemenuimg: null,
      perfilmenuimg: null,
      instagramimg: null,
    };
    return Object.keys(attrs);
  }
  connectedCallback() {
    var _a;
    this.render();
    const createPostButton =
      (_a = this.shadowRoot) === null || _a === void 0
        ? void 0
        : _a.querySelector("#create-post");
    createPostButton === null || createPostButton === void 0
      ? void 0
      : createPostButton.addEventListener("click", () => {
          console.log("From Menu");
          const event = new CustomEvent("to-create-post", { composed: true });
          this.dispatchEvent(event);
        });
  }
  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }
  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Menu/menu.css"> 
            <section>
                <header>          
                    <img src=${this.instagramimg} height = "50np" alt="Instagram logo"></img>
                    <input type="text" placeholder="Search">

                    <div>
                        <img src=${this.homeimg} alt="Home image" tabindex="0" height = "50np"></img>
                        <img id="create-post" src=${this.addimg} alt="Create post button" tabindex="0" height = "50np"></img>
                        <img src=${this.exploreimg} alt="Explore button" tabindex="0" height = "50np"></img>
                        <img src=${this.likemenuimg} height alt="Notifications button" tabindex="0" = "50np"></img>
                        <img src=${this.perfilmenuimg} alt="Profile button" tabindex="0" height = "50np"></img>
                    </div>
                </header>
            </section>
            `;
    }
  }
}
customElements.define("my-menu", MyMenu);
export default MyMenu;
