export enum Attribute {
    "nameprofile" = "nameprofile",
    "likeimg" = "likeimg",
    "postimg" = "postimg",
    "commentimg" = "commentimg",
    "sendimg" = "sendimg",
    "saveimg" = "saveimg",
    "comments" = "comments",
    "viewers" = "viewers",
    "comment" = "comment"
    
}

class MyPost extends HTMLElement{
    nameprofile?: string;
    likeimg?: string;
    postimg?: string;
    commentimg?: string;
    sendimg?: string;
    saveimg?: string
    comments?: number;
    viewers?: number;
    comment?: string

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            nameprofile: null,
            likeimg: null,
            postimg: null,
            commentimg: null,
            sendimg: null,
            saveimg: null,
            comments: null,
            viewers: null,
            comment: null
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
        propName: Attribute, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            this[propName] = newValue as any;
            this.render();
    }

    render(){        
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/PostInsta/post.css">
            <section>
                <div class="post-header">
                    <div>
                        <h2 class="username">${this.nameprofile}</h2>
                        <p class="sponsored-text">sponsored</p>
                    </div>
                </div>
                <img src=${this.postimg} class="post-image" alt="Foto por ${this.nameprofile} con texto que dice ${this.comment}"></img>

                <div class="tools">
                    <img src="../imagesPost/likes.png" height = "40np" alt="Like"></img>
                    <img src="../imagesPost/comment.png" height = "40np" alt="Comment icon button"></img>
                    <img src="../imagesPost/send.png" height = "40np" alt="Send icon button"></img>
                    <img src="../imagesPost/save.png" height = "40np" alt="Save icon button"></img>

                </div>
                <p>${this.comment}</p>
                <p><strong>${this.viewers} views</strong></p>
                <p>Watch the ${this.comments} comments</p>
            </section>
            `;
        }
    }

}

customElements.define("my-post", MyPost);
export default MyPost;