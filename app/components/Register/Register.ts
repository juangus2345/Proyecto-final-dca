import { addUser } from "../../services/db.js";

export class Register extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form?.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            addUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("register-success",{
                        composed: true
                    })
                    console.log(this);

                    this.dispatchEvent(event);
                }else{
                    alert("Usuario Incorrecto");
                }
            })
        })

        const toLoginBtn = this.shadowRoot?.querySelector('button');
        toLoginBtn?.addEventListener('click', () => {
            const event: CustomEvent = new CustomEvent('go-login', {
                composed: true
            });

            this.dispatchEvent(event);
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>
        <link rel="stylesheet" href=" ./components/Register/register.css">
        
        
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="">
            <h2>Sign up to see photos and videos from your friends.</h2>

            <img class="log-img" src="../imagesRegister/logFacebook.jpg" alt="Login with facebook button" tabindex="0">

            <app-form></app-form>

            <p>Users of our service may have uploaded your contact information on Instagram. More information</p>

            <p>By signing up, you agree to our Terms, our Privacy Policy and our Cookies Policy.</p>

            <button type="account">Have an account? Log in.</button>
            
        </section>
        <img class="app-img" alt="download in app" src="../imagesRegister/app.jpg">
        `
    }
}

customElements.define("app-register",Register);