//Importamos los componentes creados al App Container para poder utilizarlos
//Si tienen un archivo de datos también deben importarlo para poder usarlo aquí
import * as components from "./components/Export.js";

//Seguimos el mismo procedimiento que cuando estamos creando el componente
class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }

    
    render(){
        //Utilizamos el tag que le especificamos a nuestro custom element y le damos un valor al o los atributo(S) que establecimos
        //Debemos escribirlos tal cual los colocamos en el custom element
        this.shadowRoot.innerHTML=`
        <profile-tag name="Juan"></profile-tag>
        `
    }
}


customElements.define('app-container', AppContainer);