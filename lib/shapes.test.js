//importing Shape, Circle, Triangle, Square object from shapes.js using object destructuring
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
    it('prints circle when draw is called', () => {
        const word = 'tes';
        const circle = new Circle(word);
        expect(circle.draw()).toEqual(`
<svg>
<circle cx="70" cy="70" r="60"  fill="#FF00FF" />
<text x="70" y="75" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill="#000000">
tes
</text>
</svg>`);
    })
})
describe('Triangle', () => {
    it('should print triangle when draw is invoked', () => {
        const word = "tes";
        const triangle = new Triangle(word);
        expect(triangle.draw()).toEqual(`
<svg>
<polygon points="70,10 10,110 130,110"  fill="#FF00FF" />
<text x="70" y="80" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill="#000000">tes</text>
</svg>`);
    })
})

describe('Square class', () => {
    it('should print square when draw function is invoked', () => {
        const word = "tes"
        const square = new Square(word);
        expect(square.draw()).toEqual(`
<svg>
<rect x="10" y="10" width="120" height="120"  fill="#FF00FF" />
<text x="70" y="70" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill="#000000">tes</text>
</svg>`);
    })
})