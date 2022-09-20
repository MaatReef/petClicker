
import {petListView,petView  } from "../model/model.js";
import {model  } from "../view/assets/js/index.js";

// CONTROLADOR
export const controller = {
    init() {
        // Establecemos la mascota actual como la primera en la lista
        model.currentPet = model.pets[0];

        console.log(model.currentPet);
        // Inicializamos las vistas
        petListView.init();
        petView.init();
    },

    getCurrentPet() {
    	return model.currentPet;
    },

    getPets() {
    	return model.pets;
    },

    // Establecemos la macota seleccionada actualmente
    setCurrentPet(pet) {
    	model.currentPet = pet;
    },

    // Incrementamos el contador para la mascota seleccionada actualmente
    incrementCounter() {
        model.currentPet.clickCount++;
        petView.render();
    },
};

controller.init();
