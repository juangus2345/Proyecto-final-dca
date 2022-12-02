export enum Attribute4 {
    "nameprofile" = "nameprofile",
    "image" = "image",
    "followers" = "followers"
    
   
}

class MySuggestion extends HTMLElement{
    nameprofile?: string;
    image?: string;
    followers?: string;
    

    static get observedAttributes(){
        const attrs: Record<Attribute4,null> = {
            nameprofile: null,
            image: null,
            followers: null
            
        }
        return Object.keys(attrs); 
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute4, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
           
            this[propName] = newValue;
            this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Suggestions/suggestion.css"> 
            <section>
                <img src=${this.image} alt="Profile image suggestion">
                <div>
                <p>${this.nameprofile}</p>
                <p class="mini-followers">${this.followers}</p>
                </div>
            </section>
            `;
        }
    }

}

customElements.define("content-suggested", MySuggestion);
export default MySuggestion;