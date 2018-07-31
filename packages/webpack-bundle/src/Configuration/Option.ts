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

    public getValue() {
        return this.value;
    }

    public abstract serialize(): unknown;
}
