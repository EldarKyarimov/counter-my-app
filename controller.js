export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.listenIncreaseButton(this.onIncrease.bind(this));
        this.view.listenDecreaseButton(this.onDecrease.bind(this));
    }

    onIncrease() {
        this.model.increase();
        this.refresh();
    }

    onDecrease() {
        this.model.decrease();
        this.refresh();
    }

    refresh() {
        this.view.refreshDisplay(this.model.count);
    }
}