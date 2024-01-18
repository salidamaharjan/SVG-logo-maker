//importing Shape, Circle, Triangle, Square object from shapes.js using object destructuring
const { Shape, Circle, Triangle, Square } = require("./shapes");
describe("Shape class", () => {
  it("should throw an error when draw method is called", () => {
    const word = "tes";
    const shape = new Shape(word);
    expect(shape.draw).toThrowError("Cannot call draw function");
  });
  it("should throw an error when entered character's length is not equal to 3", () => {
    const word = "test";
    const shape = () => new Shape(word);
    expect(shape).toThrowError("Enter word with 3 character");
  });
  it("should throw an error when entered empty string", () => {
    const word = "";
    const shape = () => new Shape(word);
    expect(shape).toThrowError("Enter word with 3 character");
  });
  it("should throw an error when no string is passed", () => {
    const shape = () => new Shape();
    expect(shape).toThrowError("Enter word with 3 character");
  });
});

describe("Circle class", () => {
  it("prints circle when draw is called", () => {
    const word = "tes";
    const shapeColor = "red";
    const textColor = "white";
    const circle = new Circle(word, shapeColor, textColor);
    expect(circle.draw()).toEqual(`
<svg fill="#000000" width="300px" height="200px" viewBox="0 0 15 15" version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg">
<path d="M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z" fill="${shapeColor}"/>
<text x="50%" y="60%" font-size="4px" text-anchor="middle" fill="${textColor}" font-weight="bold">${word}</text>
</svg>`);
  });
});
describe("Triangle", () => {
  it("should print triangle when draw is invoked", () => {
    const word = "tes";
    const shapeColor = "green";
    const textColor = "white";
    const triangle = new Triangle(word, shapeColor, textColor);
    expect(triangle.draw()).toEqual(`
<svg width="300px" height="200px" viewBox="0 0 15 15" version="1.1" id="triangle" xmlns="http://www.w3.org/2000/svg">
<path id="path21090-9" d="M7.5385,2&#xA;&#x9;C7.2437,2,7.0502,2.1772,6.9231,2.3846l-5.8462,9.5385C1,12,1,12.1538,1,12.3077C1,12.8462,1.3846,13,1.6923,13h11.6154&#xA;&#x9;C13.6923,13,14,12.8462,14,12.3077c0-0.1538,0-0.2308-0.0769-0.3846L8.1538,2.3846C8.028,2.1765,7.7882,2,7.5385,2z" fill="${shapeColor}"/>
<text x="50%" y="70%" font-size="4px" text-anchor="middle" fill="${textColor}" font-weight="bold">${word}</text>
</svg>`);
  });
});

describe("Square class", () => {
  it("should print square when draw function is invoked", () => {
    const word = "tes";
    const shapeColor = "blue";
    const textColor = "white";
    const square = new Square(word, shapeColor, textColor);
    expect(square.draw()).toEqual(`
<svg fill="#000000" width="300px" height="200px" viewBox="0 0 15 15" version="1.1" id="square" xmlns="http://www.w3.org/2000/svg">
<path d="M13,14H2c-0.5523,0-1-0.4477-1-1V2c0-0.5523,0.4477-1,1-1h11c0.5523,0,1,0.4477,1,1v11C14,13.5523,13.5523,14,13,14z" fill="${shapeColor}"/>
<text x="50%" y="60%" font-size="4px" text-anchor="middle" fill="${textColor}" font-weight="bold">${word}</text>
</svg>`);
  });
});
