import {controller} from "../controller/controller.js";

// VISTAS
export const petListView = {
    init() {
        // Guardamos el elemento del dom
        this.petListElem = document.getElementById('pet-list');

        // Renderizamos la vista
        this.render();
    },

    render() {
        let pet;
        let elem;

        // Obtenemos las mascotas a través del controlador
        const pets = controller.getPets();

        // Recorremos las mascotas
        for(let i = 0; i < pets.length; i++) {
            // Mascota actual
            pet = pets[i];

            // Creamos un nuevo elemento en la lista de mascotas
            elem = document.createElement('li');
            elem.className = 'list-group-item';
            elem.style.cursor = 'pointer';
            elem.textContent = pet.name;
            elem.addEventListener(
                'click',
                (function(petCopy) {
                    return function() {
                        controller.setCurrentPet(petCopy);
                        petView.render();
                    };
                })(pet)
            );
            // Agregamos el elemento a la lista
            this.petListElem.appendChild(elem);
        }
    },
};

export const petView = {
    init() {
        this.petElem = document.getElementById('pet');
        this.petNameElem = document.getElementById('pet-name');
        this.petImageElem = document.getElementById('pet-img');
        this.countElem = document.getElementById('pet-count');
        this.elCount = document.getElementById('elCount');


        // Al hacer click, incrmeentamos el contador de la mascota actual
        this.petImageElem.addEventListener('click', this.handleClick);

        // Renderizamos esta vista
        this.render();
    },

    handleClick() {
    	return controller.incrementCounter();
    },

    render() {
        // Actualizamos los elementos DOM con los datos de la mascota actual
        const currentPet = controller.getCurrentPet();
        this.countElem.textContent = "Clicks: " + currentPet.clickCount;
        this.petNameElem.textContent = currentPet.name;
        this.petImageElem.src = currentPet.imgSrc;
        this.petImageElem.style.cursor = 'pointer';
    },
};

