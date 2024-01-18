/**
 * A parent class which has a draw method
 */
class Shape {
  /**
   * constructor function to create Shape object
   *
   * @param {string} word
   * @param {string} shapeColor
   * @param {string} textColor
   *
   */

  constructor(word, shapeColor, textColor) {
    //checking if the word entered has three character
    if (!word || word.length > 3) {
      throw new Error("Enter word with 3 character");
    }
    //Validating the enter hexadecimal color
    const regex = new RegExp("^#[0-9A-F]{6}$|^#[0-9A-F]{3}|^[A-Z0-9]+$", "i");
    if (!regex.test(shapeColor)) {
      throw new Error("Invalid Shape Color");
    }
    if (!regex.test(textColor)) {
      throw new Error("Invalid Text Color");
    }
    this.word = word;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  /**
   * draw() method throws an error.
   * This should be inherited by child classes.
   * Hence, throwing an error when somebody calls draw method on Shape object.
   */
  draw() {
    throw new Error("Cannot call draw function");
  }
}
/**
 * Circle is child class of Shape
 * It inherits draw() method from parent class.
 */
class Circle extends Shape {
  /**
   *
   * @param {string} word
   * @param {string} shapeColor
   * @param {string} textColor
   *
   */
  constructor(word, shapeColor, textColor) {
    //calling parent's constructor using super constructor function
    super(word, shapeColor, textColor);
  }
  /**
   *
   * @returns {string} svg representation of circle
   */
  draw() {
    return `
<svg fill="#000000" width="300px" height="200px" viewBox="0 0 15 15" version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg">
<path d="M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z" fill="${this.shapeColor}"/>
<text x="50%" y="60%" font-size="4px" text-anchor="middle" fill="${this.textColor}" font-weight="bold">${this.word}</text>
</svg>`;
  }
}
/**
 * Triangle is child class of Shape
 * It inherits draw() method from parent class.
 */
class Triangle extends Shape {
  /**
   *
   * @param {string} word
   * @param {string} shapeColor
   * @param {string} textColor
   */
  constructor(word, shapeColor, textColor) {
    //calling parent's constructor using super constructor function
    super(word, shapeColor, textColor);
  }
  /**
   *
   * @returns {string} svg representation of triangle
   */
  draw() {
    return `
<svg width="300px" height="200px" viewBox="0 0 15 15" version="1.1" id="triangle" xmlns="http://www.w3.org/2000/svg">
<path id="path21090-9" d="M7.5385,2&#xA;&#x9;C7.2437,2,7.0502,2.1772,6.9231,2.3846l-5.8462,9.5385C1,12,1,12.1538,1,12.3077C1,12.8462,1.3846,13,1.6923,13h11.6154&#xA;&#x9;C13.6923,13,14,12.8462,14,12.3077c0-0.1538,0-0.2308-0.0769-0.3846L8.1538,2.3846C8.028,2.1765,7.7882,2,7.5385,2z" fill="${this.shapeColor}"/>
<text x="50%" y="70%" font-size="4px" text-anchor="middle" fill="${this.textColor}" font-weight="bold">${this.word}</text>
</svg>`;
  }
}
/**
 * Square is child class of Shape
 * It inherits draw() method from parent class.
 */
class Square extends Shape {
  /**
   *
   * @param {string} word
   * @param {string} shapeColor
   * @param {string} textColor
   */
  constructor(word, shapeColor, textColor) {
    //calling parent's constructor using super constructor function
    super(word, shapeColor, textColor);
  }
  /**
   *
   * @returns {string} svg representation of square
   */
  draw() {
    return `
<svg fill="#000000" width="300px" height="200px" viewBox="0 0 15 15" version="1.1" id="square" xmlns="http://www.w3.org/2000/svg">
<path d="M13,14H2c-0.5523,0-1-0.4477-1-1V2c0-0.5523,0.4477-1,1-1h11c0.5523,0,1,0.4477,1,1v11C14,13.5523,13.5523,14,13,14z" fill="${this.shapeColor}"/>
<text x="50%" y="60%" font-size="4px" text-anchor="middle" fill="${this.textColor}" font-weight="bold">${this.word}</text>
</svg>`;
  }
}

//export file to be able to use in other file
module.exports = { Shape, Circle, Triangle, Square };
