class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {
        let semiPerimeter = (this.a + this.b + this.c) / 2;
        let square = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));

        return square;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }

    getArea() {
        return this.a * this.a;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return Math.PI * this.r ** 2;
    }
}

const figures = [new Triangle(3, 4, 5), new Square(7), new Circle(5)];

function handleFigures(figures) {
    for (let i = 0; i < figures.length; i += 1) {
        if (figures[i] instanceof GeometricFigure) {
            console.log("Geometric figure: " + figures[i].toString() + " - area: " + figures[i].getArea());
        }
    }
}
handleFigures(figures);

let totalArea = figures.reduce(function (previousValue, currentValue) {
    if (previousValue instanceof GeometricFigure) {
        previousValue = previousValue.getArea();
    }

    if (currentValue instanceof GeometricFigure) {
        currentValue = currentValue.getArea();
    }

    return previousValue + currentValue;
});
console.log(totalArea);