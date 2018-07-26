
interface IValue {
    up: number;
    down: number;
    threshold: number;
}

const map: IValue[] = [];
for (let i = 10; i < 100; i = i + 2) {
    map.push({
        down: i - 3,
        threshold: 1,
        up: i,
    });
}
