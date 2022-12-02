var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { addPost } from "../../utils/db.js";
export class CreatePost extends HTMLElement {
  constructor() {
    super();
    this.username = "";
    this.image = "";
    this.comment = "";
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    var _a, _b, _c, _d;
    this.render();
    const btn =
      (_a = this.shadowRoot) === null || _a === void 0
        ? void 0
        : _a.querySelector("button");
    btn === null || btn === void 0
      ? void 0
      : btn.addEventListener("click", () =>
          __awaiter(this, void 0, void 0, function* () {
            if (this.username && this.image && this.comment) {
              const postData = {
                username: this.username,
                image: this.image,
                comment: this.comment,
              };
              try {
                yield addPost(postData);
                alert("Post creado");
                const event = new CustomEvent("form-fullfilled", {
                  composed: true,
                });
                this.dispatchEvent(event);
              } catch (error) {
                console.error(error);
                alert("An error occurred while creating the post");
              }
            } else {
              alert("Missing fields");
            }
          })
        );
    const usernameInput =
      (_b = this.shadowRoot) === null || _b === void 0
        ? void 0
        : _b.querySelector("#username");
    const imageInput =
      (_c = this.shadowRoot) === null || _c === void 0
        ? void 0
        : _c.querySelector("#image");
    const commentInput =
      (_d = this.shadowRoot) === null || _d === void 0
        ? void 0
        : _d.querySelector("#comment");
    usernameInput === null || usernameInput === void 0
      ? void 0
      : usernameInput.addEventListener("change", (evt) => {
          const value = evt.target.value || "";
          this.username = value;
        });
    imageInput === null || imageInput === void 0
      ? void 0
      : imageInput.addEventListener("change", (evt) => {
          const value = evt.target.value || "";
          this.image = value;
        });
    commentInput === null || commentInput === void 0
      ? void 0
      : commentInput.addEventListener("change", (evt) => {
          const value = evt.target.value || "";
          this.comment = value;
        });
  }
  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
        <article>
        <link rel="stylesheet" href=" ./components/Form/style.css">
            <div class="input">
                <input class="input__field" type="text" placeholder="Username" id="username"/>
            </div>
           
            <div class="input">
                <input class="input__field" type="text" placeholder="Image" id="image"/>
            </div>

            <div class="input">
                <input class="input__field" type="text" placeholder="Comment" id="comment"/>
            </div>
            
            <button type="submit">Create post</button>
            
        </article>
        `;
  }
}
customElements.define("app-create-post", CreatePost);
