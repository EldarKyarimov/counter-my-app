export default class View {
    constructor() {
        this.display = document.querySelector('#display');
        this.increaseButton = document.querySelector('#increaseButton');
        this.decreaseButton = document.querySelector('#decreaseButton');
    }

    listenIncreaseButton(callback) {
        this.increaseButton.addEventListener('click', callback);
    }

    listenDecreaseButton(callback) {
        this.decreaseButton.addEventListener('click', callback);
    }

    refreshDisplay(value) {
        this.display.value = value;
    }

}