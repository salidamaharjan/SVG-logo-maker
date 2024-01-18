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
<svg>
<circle cx="70" cy="70" r="60"  fill="${this.shapeColor}" />
<text x="70" y="75" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">
${this.word}
</text>
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
<svg>
<polygon points="70,10 10,110 130,110"  fill="${this.shapeColor}" />
<text x="70" y="80" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.word}</text>
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
<svg>
<rect x="10" y="10" width="120" height="120"  fill="${this.shapeColor}" />
<text x="70" y="70" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.word}</text>
</svg>`;
  }
}

//export file to be able to use in other file
module.exports = { Shape, Circle, Triangle, Square };
