//Importamos los componentes creados al App Container para poder utilizarlos
//Si tienen un archivo de datos también deben importarlo para poder usarlo aquí
import * as components from "./components/Export.js";
import data from "./components/data.js";

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
        //utilizamos un for Each para recorrer la data que tenemos
       
        data.forEach((e) => {
            //Se utiliza += para recorrer todos los datos de nuestra data
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./src/style.css" type="text/html">
            <profile-tag name="${e.name}" title="${e.title}" ></profile-tag>
            <my-counter></my-counter>
            `   
        });
    }
}


customElements.define('app-container', AppContainer);