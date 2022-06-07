class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(this.name + ' ' + this.surname);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return (this.name + ' ' + this.surname + ' ' + midleName);
    }

    showCourse() {
        let currentYear = 2022;
        let currentCourse = currentYear - this.year;
        return currentCourse;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());