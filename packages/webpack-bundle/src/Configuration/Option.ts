export abstract class Option<T> {
    protected readonly value?: T;

    constructor(value?: T) {
        if (value) {
            this.value = value;
        }
    }

    public get name() {
        return this.constructor.name;
    }

    public abstract serialize(): unknown;
}
