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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCMed7CymJZlatgqzZq40svDntrybGfqqU",
  authDomain: "instadatos-b6d67.firebaseapp.com",
  projectId: "instadatos-b6d67",
  storageBucket: "instadatos-b6d67.appspot.com",
  messagingSenderId: "1074798394195",
  appId: "1:1074798394195:web:8c02d2022f73c08a47ffa6",
  measurementId: "G-PY24XYWBWD",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "usuarios");
export const queryUser = ({ email, password }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const q = query(
        usersRef,
        where("email", "==", email),
        where("password", "==", password)
      );
      const querySnapshot = yield getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
      return !querySnapshot.empty;
    } catch (error) {
      return false;
    }
  });
export const addUser = ({ email, password }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const docRef = yield addDoc(collection(db, "usuarios"), {
        email,
        password,
      });
      return true;
    } catch (error) {
      alert("" + error);
      return false;
    }
  });
export const addPost = ({ username, image, comment }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield addDoc(collection(db, "posts"), {
        username,
        image,
        comment,
        viewers: 0,
        comments: 0,
        profileimg: "../imagesPost/perfil.png",
      });
      return true;
    } catch (error) {
      return false;
    }
  });
export const getPosts = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const posts = [];
      const querySnapshot = yield getDocs(collection(db, "posts"));
      querySnapshot.forEach((post) => {
        posts.push(post.data());
        console.log(post);
      });
      return posts;
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error");
    }
  });
