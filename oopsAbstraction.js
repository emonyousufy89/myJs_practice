// Abstraction means, hide the details and show the only essentials

function TheRestangle(lenght,width){
    let recname = 'beauty';
    this.lenght=lenght;
    this.width=width;
    this.area = function(){
        console.log('the area of ' + lenght * width + recname)
    }
}

let showRec = new TheRestangle(9,8);
showRec.area();
console.log(showRec.recname);

// using getter and setters

function Circle(radius){
    this.radius=radius;
    let defaultLocation= {a: 4, b: 6};
    this.getLocation= function(){
        return defaultLocation;
    }
    this.draw= function(){
        console.log('lets draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation
        }
    })
}
let showCircle = new Circle(10);
showCircle.draw();
showCircle.getLocation();

