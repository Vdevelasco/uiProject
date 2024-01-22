//import * as imports from "./imports.js"; //Tras un update de node sólo permite hacer imports desde/hacia ts????

"use strict";
document.addEventListener('DOMContentLoaded', function () { //introducirlo todo en ésta función fué sugerido por chatGPT
    //Referencias constantes tanto a botones como el contenido
    const homeBtn = document.getElementById('homeBtn');
    const contactBtn = document.getElementById('contactBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const content = document.getElementById('content');

    //Eventos
    homeBtn.addEventListener('click', () => {
        showHome();
    });

    contactBtn.addEventListener('click', () => {
        showContact();
    });

    aboutBtn.addEventListener('click', () => {
        showAbout();
    });

    //Estado inicial
    showHome();

    //Funciones para cambiar "content"
    //Para export sustituir SYNTETIC_ID_ por ${imports}
    function showHome() {
        content.innerHTML = `

        <div class="image-container">
            <div class="image-wrapper">
                <img src=${image1.url} alt="Image 1">
                <p>${image1.name}</p>
            </div>
            <div class="image-wrapper">
                <img src="./image2.jpeg" alt="Image 2">
                    <p>@SYNTETIC_ID_</p>
            </div>
            <div class="image-wrapper">
                <img src="./image3.jpeg" alt="Image 3">
                <p>@4NT7RO</p>
            </div>
        </div>
        `;
    }

    function showContact() {
        content.innerHTML = `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nulla vitae neque fringilla aliquam non id libero.</p>
        `;
    }

    function showAbout() {
        content.innerHTML = `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nulla vitae neque fringilla aliquam non id libero.</p>
        `;
    }
});

//Objeto representando una posible obtención de una imagen desde una base de datos
const image1 = {
    url: "./image1.jpeg",
    name: "@KOPRISEVSKID",
    descripcion: "asdfasdfasdfasdffasdf"
}
