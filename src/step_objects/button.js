import checkIfElementExists from '../util/checkIfElementExists';
import findElement from '../util/findElement';

class Button {
    constructor(selector, index) {
        this.selector = selector;
        this.index = index;
    }

    click() {
        checkIfElementExists(this.selector);
        findElement(this.selector).click();
    }
}

export default Button;