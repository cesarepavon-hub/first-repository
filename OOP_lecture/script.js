/* global document */
"use strict";

// Clase para cada proyecto individual
class Proyecto {
    constructor(titulo, descripcion, imagen, link) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.link = link;
    }

    crearHTML() {
        return `
            <div class="proyecto">
                <img src="${this.imagen}" alt="${this.titulo}">
                <h3>${this.titulo}</h3>
                <p>${this.descripcion}</p>
                <a href="${this.link}" target="_blank">Ver proyecto</a>
            </div>
        `;
    }
}

// Clase para manejar todo el portafolio
class Portafolio {
    constructor() {
        this.proyectos = [];
        this.contenedor = document.getElementById('portafolio');
    }

    agregarProyecto(proyecto) {
        this.proyectos.push(proyecto);
    }

    mostrarProyectos() {
        let html = '<div class="proyectos-grid">';
        this.proyectos.forEach(proyecto => {
            html += proyecto.crearHTML();
        });
        html += '</div>';
        this.contenedor.innerHTML = html;
    }
}