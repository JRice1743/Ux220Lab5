class JackElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Jackson was here";
    }
}

customElements.define("x-jack", JackElement);