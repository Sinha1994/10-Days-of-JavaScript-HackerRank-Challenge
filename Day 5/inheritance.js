/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
    if(this.w && this.h){
        return this.w*this.h;
    }
    else{
        return this.a*this.a;
    }
}
class Square extends Rectangle{
      constructor(a) {
          super(a);
          this.a = a;
      }
  }