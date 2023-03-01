//Lo primero es crear la clase con el nombre que queramos, en este caso MyProfile
//y vamos a extender a un elemento HTMLElement que nos permitirá crear ese customElement

class MyProfile extends HTMLElement {

//Aquí realmente no importa el orden, puede ir primero el constructor o los atributos

//Este método nos va a permitir encapsular los atributos que queremos usar posteriormente
//Como su nombre lo dice vamos a "observar los atributos", y vamos a retornarlos en un array.

static get observedAttributes(){
    return ['name'];
}

//Creamos el constructor, llamamos el super(), y añadimos el attachShadow que creara una ruta al "Árbol" del html y nos devolverá la dirección

constructor(){
    super();
    this.attachShadow({mode: 'open'});
}

//El connected call back se va a ejecutar cada vez que se monte/refresque la página, va a tener dentro el render
//que es el encargado de renderizar nuestro HTML

connectedCallback(){
    this.render();
}


//Este método se va a encargar de escuchar los cambios que le hagamos a nuestros atributos, va a refrescarse cada vez que haya un cambio

attributeChangedCallback(propName, oldValue, newValue){
    this[propName] = newValue;
    this.render();
}


//Aquí es donde vamos a montar nuestro HTML, vamos a utilizar las comillas invertidas `` para mayor facilidad a la hora de agregar
//nuestros atributos

//Tip: realicen su html aparte en un archivo html y luego lo pegan para más facilidad de escritura

render(){
    this.shadowRoot.innerHTML= `
    <section>
    <h1>Nombre: ${this.name}</h1>
    </section>
    `;
    }
}

//Vamos a darle un tag a nuestro custom element, debe ser separado por un guion (custom-element), luego colocamos el nombre de la clase que creamos
//Finalmente lo exportamos para luego usarlo en el App Container
customElements.define('profile-tag', MyProfile);
export default MyProfile;