import { addUser } from "../../utils/db.js";
export class Register extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    var _a, _b;
    this.render();
    const form =
      (_a = this.shadowRoot) === null || _a === void 0
        ? void 0
        : _a.querySelector("app-form");
    form === null || form === void 0
      ? void 0
      : form.addEventListener("form-fullfiled", (evt) => {
          const email = evt.detail.email;
          const password = evt.detail.password;
          addUser({ email, password }).then((value) => {
            if (value) {
              const event = new CustomEvent("register-success", {
                composed: true,
              });
              console.log(this);
              this.dispatchEvent(event);
            } else {
              alert("Usuario Incorrecto");
            }
          });
        });
    const toLoginBtn =
      (_b = this.shadowRoot) === null || _b === void 0
        ? void 0
        : _b.querySelector("button");
    toLoginBtn === null || toLoginBtn === void 0
      ? void 0
      : toLoginBtn.addEventListener("click", () => {
          const event = new CustomEvent("go-login", {
            composed: true,
          });
          this.dispatchEvent(event);
        });
  }
  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
        
    <section>
        <link rel="stylesheet" href=" ./components/Register/register.css">
        
        
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="">
            <h2>Sign up to see photos and videos from your friends.</h2>

            <app-form></app-form>

            <p>Users of our service may have uploaded your contact information on Instagram. More information</p>

            <p>By signing up, you agree to our Terms, our Privacy Policy and our Cookies Policy.</p>

            <button type="account">Have an account? Log in.</button>
            
        </section>
        `;
  }
}
customElements.define("app-register", Register);
