/**
 * A parent class which has a draw method
 */
class Shape {
  /**
   * constructor function to create Shape object
   *
   * parameter:
   *    - word which is string
   * 
   * returns:
   *    - none
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
   * This method will  return the circle text
   *
   * parameters:
   *    - none
   *
   * returns:
   *    - string: text circle
   */
  //calling parent's constructor using super constructor function
  constructor(word, shapeColor, textColor){
    super(word, shapeColor, textColor);
  }
  draw() {
    return `
<svg>
<circle cx="70" cy="70" r="60"  fill=${this.shapeColor}/>
<text x="70" y="75" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill=${this.textColor}>
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
   * draw method returns text triangle when called
   *
   * parameters:
   *    - none
   *
   * returns:
   *    - string: text triangle
   *
   */
  constructor(word, shapeColor, textColor){
    super(word, shapeColor, textColor)
  }
  draw() {
    return `
<svg>
<polygon points="70,10 10,110 130,110"  fill=${this.shapeColor} />
<text x="70" y="80" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill=${this.textColor}>${this.word}</text>
</svg>`;
  }
}
/**
 * Square is child class of Shape
 * It inherits draw() method from parent class.
 */
class Square extends Shape {
  /**
   * draw method returns text square when called
   *
   * parameters:
   *    - none
   *
   * returns:
   *    - string: text square
   *
   */
  constructor(word, shapeColor, textColor){
    super(word, shapeColor, textColor);
  }
  draw() {
    return `
<svg>
<rect x="10" y="10" width="120" height="120"  fill=${this.shapeColor} />
<text x="70" y="70" font-size="40" font-weight="bold" text-anchor="middle" alignment-baseline="middle" fill=${this.textColor}>${this.word}</text>
</svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
