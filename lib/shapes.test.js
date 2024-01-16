const {Shape, Circle, Triangle, Square} = require("./shapes");
describe('Shape class', () => {
    it('should throw an error when draw method is called', () => {
        const word = "tes";
        const shape = new Shape(word);
        expect(shape.draw).toThrowError("Cannot call draw function");
    })
    it("should throw an error when entered character's length is not equal to 3",() => {
        const word = "test";
        const shape = () => new Shape(word);
        expect(shape).toThrowError("Enter word with 3 character");
    })
    it("should throw an error when entered empty string",() => {
        const word = "";
        const shape = () => new Shape(word);
        expect(shape).toThrowError("Enter word with 3 character");
    })
    it("should throw an error when no string is passed",() => {
        const shape = () => new Shape();
        expect(shape).toThrowError("Enter word with 3 character");
    })
})

describe('Circle class', () => {
    xit('prints circle when draw is called', () => {
        const circle = new Circle();
        expect(circle.draw()).toEqual("circle");
    })
})
describe('Triangle', () => {
    xit('should print triangle when draw is invoked', () => {
        const triangle = new Triangle;
        expect(triangle.draw()).toEqual("triangle");
    })
})

describe('Square class', () => {
    xit('should print square when draw function is invoked', () => {
        const square = new Square;
        expect(square.draw()).toEqual("square");
    })
})