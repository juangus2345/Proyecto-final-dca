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
var __classPrivateFieldGet =
  (this && this.__classPrivateFieldGet) ||
  function (receiver, state, kind, f) {
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a getter");
    if (
      typeof state === "function"
        ? receiver !== state || !f
        : !state.has(receiver)
    )
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it"
      );
    return kind === "m"
      ? f
      : kind === "a"
      ? f.call(receiver)
      : f
      ? f.value
      : state.get(receiver);
  };
var __classPrivateFieldSet =
  (this && this.__classPrivateFieldSet) ||
  function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
      throw new TypeError("Private accessor was defined without a setter");
    if (
      typeof state === "function"
        ? receiver !== state || !f
        : !state.has(receiver)
    )
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it"
      );
    return (
      kind === "a"
        ? f.call(receiver, value)
        : f
        ? (f.value = value)
        : state.set(receiver, value),
      value
    );
  };
var _Home_onPostCreation;
import "../index.js";
import data2 from "../../menuAssignmet.js";
import data3 from "../../dataStory.js";
import data4 from "../../suggestInfo.js";
import { Attribute } from "../PostInsta/PostInsta.js";
import { Attribute2 } from "../Menu/Menu.js";
import { Attribute3 } from "../Hystory/History.js";
import { Attribute4 } from "../Suggestions/Suggestions.js";
import { getPosts } from "../../utils/db.js";
export class Home extends HTMLElement {
  constructor() {
    super();
    this.post = [];
    this.menuUser = [];
    this.historyUser = [];
    this.suggestionsUser = [];
    _Home_onPostCreation.set(this, () => {});
    this.attachShadow({ mode: "open" });
    data2.forEach((menuUser) => {
      const menuCard = this.ownerDocument.createElement("my-menu");
      menuCard.setAttribute(Attribute2.addimg, menuUser.addimg);
      menuCard.setAttribute(Attribute2.exploreimg, menuUser.exploreimg);
      menuCard.setAttribute(Attribute2.homeimg, menuUser.homeimg);
      menuCard.setAttribute(Attribute2.likemenuimg, menuUser.likemenuimg);
      menuCard.setAttribute(Attribute2.perfilmenuimg, menuUser.perfilmenuimg);
      menuCard.setAttribute(Attribute2.instagramimg, menuUser.instagramimg);
      this.menuUser.push(menuCard);
    });
    data3.forEach((historyUser) => {
      const historyCard = this.ownerDocument.createElement("my-history");
      historyCard.setAttribute(Attribute3.userhistory, historyUser.userStory);
      historyCard.setAttribute(Attribute3.imagehistory, historyUser.imagestory);
      this.historyUser.push(historyCard);
    });
    data4.forEach((suggestionsUser) => {
      const suggestedCard =
        this.ownerDocument.createElement("content-suggested");
      suggestedCard.setAttribute(Attribute4.nameprofile, suggestionsUser.name);
      suggestedCard.setAttribute(Attribute4.image, suggestionsUser.image);
      suggestedCard.setAttribute(
        Attribute4.followers,
        suggestionsUser.followers
      );
      this.suggestionsUser.push(suggestedCard);
    });
  }
  connectedCallback() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const posts = yield getPosts();
        posts === null || posts === void 0
          ? void 0
          : posts.forEach(
              ({
                username: nameprofile,
                image: postimg,
                profileimg,
                comment,
                comments,
                viewers,
              }) => {
                console.log({
                  username: nameprofile,
                  image: postimg,
                  profileimg,
                  comment,
                  comments,
                  viewers,
                });
                const postCard = this.ownerDocument.createElement("my-post");
                postCard.setAttribute(Attribute.nameprofile, nameprofile);
                postCard.setAttribute(Attribute.profileimg, profileimg);
                postCard.setAttribute(Attribute.postimg, postimg);
                postCard.setAttribute(Attribute.comments, "" + comments);
                postCard.setAttribute(Attribute.viewers, "" + viewers);
                postCard.setAttribute(Attribute.comment, comment);
                this.post.push(postCard);
              }
            );
        this.render();
      } catch (error) {
        console.error(error);
      } finally {
        this.onPostCreation();
      }
    });
  }
  render() {
    var _a, _b;
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Home/home.css"> `;
      const contentContainer = document.createElement("div");
      contentContainer.classList.add("content");
      const postContainer = document.createElement("div");
      const historyContainer = document.createElement("div");
      const suggested = document.createElement("div");
      historyContainer.classList.add("content-history");
      this.menuUser.forEach((menuUser) => {
        var _a;
        (_a = this.shadowRoot) === null || _a === void 0
          ? void 0
          : _a.appendChild(menuUser);
      });
      this.historyUser.forEach((historyUser) => {
        historyContainer === null || historyContainer === void 0
          ? void 0
          : historyContainer.appendChild(historyUser);
      });
      (_a = this.shadowRoot) === null || _a === void 0
        ? void 0
        : _a.appendChild(historyContainer);
      this.post.forEach((post) => {
        postContainer.appendChild(post);
      });
      this.suggestionsUser.forEach((suggestion) => {
        suggested.appendChild(suggestion);
      });
      contentContainer.appendChild(postContainer);
      contentContainer.appendChild(suggested);
      (_b = this.shadowRoot) === null || _b === void 0
        ? void 0
        : _b.appendChild(contentContainer);
    }
  }
  onPostCreation(val) {
    var _a;
    __classPrivateFieldSet(
      this,
      _Home_onPostCreation,
      val || __classPrivateFieldGet(this, _Home_onPostCreation, "f"),
      "f"
    );
    const toCreatePost =
      (_a = this.shadowRoot) === null || _a === void 0
        ? void 0
        : _a.querySelector("my-menu");
    toCreatePost === null || toCreatePost === void 0
      ? void 0
      : toCreatePost.addEventListener(
          "to-create-post",
          __classPrivateFieldGet(this, _Home_onPostCreation, "f")
        );
  }
}
_Home_onPostCreation = new WeakMap();
customElements.define("app-home", Home);
