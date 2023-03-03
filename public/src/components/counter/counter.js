class MyCounter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.counter = 0;
    }
    
    connectedCallback(){
        this.mount();
    }

    mount(){
        this.render();
        this.addListeners();
    }

    addListeners(){
        const btn = document.querySelectorAll('.contador');
        btn.addEventListener('click', ()=>{
            this.counter++;
            this.mount();
        })
    }
    
    render(){
        this.shadowRoot.innerHTML= `
        <button class="contador">${this.counter}</button>
        `;
        }
    }
    
    //Vamos a darle un tag a nuestro custom element, debe ser separado por un guion (custom-element), luego colocamos el nombre de la clase que creamos
    //Finalmente lo exportamos para luego usarlo en el App Container
    customElements.define('my-counter', MyCounter);
    export default MyCounter;