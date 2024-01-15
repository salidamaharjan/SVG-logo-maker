/**
 * A parent class which has a draw method
 */
class Shape {
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

module.exports = {Shape, Circle, Triangle, Square};
