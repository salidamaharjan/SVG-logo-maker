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
  constructor(word) {
    //checking if the word entered has three character
    if (!word || word.length > 3) {
      throw new Error("Enter word with 3 character");
    }
    this.word = word;
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
  constructor(word){
    super(word);
  }
  draw() {
    return "circle";
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
  draw() {
    return "triangle";
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
  draw() {
    return "square";
  }
}

module.exports = { Shape, Circle, Triangle, Square };
