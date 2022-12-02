import "./components/index.js";
enum Screens {
    login,
    register,
    home,
    createPost
}

enum HomeAttributes {
    'onCreatePost' = 'onCreatePost'
}

interface HomeProperties extends Element {
    onPostCreation: (val:EventListener) => void;
}
class AppContainer extends HTMLElement{
    screen: Screens = Screens.register;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        this.setEventListeners();
    }

    setEventListeners() {
        const toHome = () => this.changeScreen(Screens.home);
        const toLogin = () => this.changeScreen(Screens.login);
        const toRegister = () => this.changeScreen(Screens.register);
        const toCreatePost = () => this.changeScreen(Screens.createPost);

        const createPost = this.shadowRoot?.querySelector("app-create-post");
        createPost?.addEventListener('form-fullfilled', toHome);

        const home = this.shadowRoot?.querySelector("app-home");
        (home as HomeProperties | undefined)?.onPostCreation(toCreatePost);

        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", toHome);
        login?.addEventListener('go-register', toRegister);
        
        const register = this.shadowRoot?.querySelector("app-register");
        register?.addEventListener("register-success", toHome);
        register?.addEventListener('go-login', toLogin);
    }

    render(){
        if(!this.shadowRoot) return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>"
                break;
        
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>"
            break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>"
            break;

            case Screens.createPost: 
                this.shadowRoot.innerHTML = "<app-create-post></app-create-post>"
            break;

            default:
                break;
        }
    }

    changeScreen(screen: Screens) {
        this.screen = screen;
        this.render();
        this.setEventListeners();
    }
}

customElements.define("app-container",AppContainer);