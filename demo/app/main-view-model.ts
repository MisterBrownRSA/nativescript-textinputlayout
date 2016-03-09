import observable = require("data/observable");

export class HelloWorldModel extends observable.Observable {
    private counter: number;

    constructor() {
        super();

        // Initialize default values.
        this.set('error', '');
        this.set('hint', 'Default Demo Hint');
        this.set('isErrorEnabled', true);
        this.set('isHintAnimationEnabled', true);
        this.set('isCounterEnabled', false);
    }
}
export var mainViewModel = new HelloWorldModel();