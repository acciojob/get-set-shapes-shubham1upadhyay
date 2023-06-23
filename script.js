//complete this code
class Rectangle {

	constructor(width, height)
	{
		this._width = width;
		this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea(){
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	getPerimeter(){
    return 4 * this.width;	
  }
}
// let s = new Square(4);
// console.log(s.getPerimeter());
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
