const {Shape, Circle, Triangle, Square} = require("./shapes");
describe('Shape class', () => {
    it('should throw an error when draw method is called', () => {
        const shape = new Shape();
        expect(shape.draw).toThrowError("Cannot call draw function");
    })
})

describe('Circle class', () => {
    it('prints circle when draw is called', () => {
        const circle = new Circle();
        expect(circle.draw()).toEqual("circle");
    })
})
describe('Triangle', () => {
    it('should print triangle when draw is invoked', () => {
        const triangle = new Triangle;
        expect(triangle.draw()).toEqual("triangle");
    })
})

describe('Square class', () => {
    it('should print square when draw function is invoked', () => {
        const square = new Square;
        expect(square.draw()).toEqual("square");
    })
})