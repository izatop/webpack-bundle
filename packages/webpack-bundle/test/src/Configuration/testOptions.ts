import {AMD, Mode} from "../../../src/Configuration";
import {BundleOptionMock} from "../mock/BundleOptionMock";

test("BundleOption Mock Test", () => {
    const propertyWithValue = new BundleOptionMock("value");
    expect(propertyWithValue.key)
        .toEqual(propertyWithValue.key);

    expect(propertyWithValue.serialize())
        .toEqual({[propertyWithValue.key]: "value"});

    const propertyWithoutValue = new BundleOptionMock();
    expect(propertyWithoutValue.serialize())
        .toEqual({[propertyWithoutValue.key]: undefined});
});

test("ObjectOption Test", () => {
    const property = new AMD({foo: true});
    expect(property.serialize())
        .toEqual({[property.key]: {foo: true}});
});

test("ScalarOption Test", () => {
    const property = new Mode("production");
    expect(property.serialize())
        .toEqual({[property.key]: "production"});
});
