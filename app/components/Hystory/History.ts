export enum Attribute3 {
    "userhistory" = "userhistory",
    "imagehistory" = "imagehistory"
   
}

class MyHistory extends HTMLElement{
    userhistory?: string;
    imagehistory?: string;
    

    static get observedAttributes(){
        const attrs: Record<Attribute3,null> = {
            userhistory: null,
            imagehistory: null
            
        };
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
        propName: Attribute3, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
           
            this[propName] = newValue;
            this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Hystory/history.css"> 
            <section>
            <div class="historyy">
                <img class = "imagen" src = ${this.imagehistory}></img> 
                <h1 class = "username">${this.userhistory}</h2>
            </div>    
            </section>
            `;
        }
    }

}

customElements.define("my-history", MyHistory);
export default MyHistory;