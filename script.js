//complete this code
class Rectangle {

	constructor(width, height)
	{
		this._width = width;
		this._height = height;
	}
	setWidth(w){
		this._width = w;
	}
	getWidth(){
		return this._width;
	}
	setHeight(h){
		this._height = h;
	}
	getHeight(){
		return this._height;
	}

	getArea()
	{
		return this._width * this._height;
	}
}

class Square extends Animal {
	getPerimeter(){
    let a = this.getWidth();
    return 4 * a;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
