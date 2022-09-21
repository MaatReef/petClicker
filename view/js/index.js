import {petListView,petView} from "../../model/model.js";
import {controller} from "../../controller/controller.js";

// MODELO
export const model = {
    currentPet: null,
    pets: [
        {
            clickCount: 0,
            name: 'Bubis',
            imgSrc: './view/img/bubis.jpeg',
        },
        {
            clickCount: 0,
            name: 'Choco',
            imgSrc: './view/img/choco.jpeg',
        },
        {
            clickCount: 0,
            name: 'Frufru',
            imgSrc: './view/img/frufru.jpeg',
        },
        {
            clickCount: 0,
            name: 'Grisín',
            imgSrc: './view/img/grisin.jpeg',
        },
        {
            clickCount: 0,
            name: 'Mimi',
            imgSrc: './view/img/mimi.jpeg',
        },
        {
            clickCount: 0,
            name: 'Pirito',
            imgSrc: './view/img/pirito.jpeg',
        },
    ],
};

controller.init();