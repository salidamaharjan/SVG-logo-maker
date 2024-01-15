const {Shape, Circle, Triangle, Square} = require("./shapes");
describe('Shape class', () => {
    it('should throw an error when draw method is called', () => {
        const shape = new Shape();
        expect(shape.draw).toThrowError("Cannot call draw function");
    })
})