import View from './view';
import Controller from './controller';
import Model from './model';

function initialize() {
    const model = new Model();
    const view = new View();
    const controller = new Controller(view, model);

    controller.init();
}

window.addEventListener('DOMContentLoaded', initialize);