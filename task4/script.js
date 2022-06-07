class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(this.fullName + ' salary: ' + salary);
    }

    #experience = 1.2;
    
    showSalaryWithExperience() {
        let salary = this.dayRate * this.workingDays * this.#experience;
        return salary;
    }

    set setExp (value) {
        this.#experience = value;
    }
    
    get setExp() {
        return this.#experience;
    }

    sortSalaries() {
        let worker = this.fullName;
        let salary = this.dayRate * this.workingDays * this.#experience;
        return {
            ['worker_fullName'] : worker,
            ['salary_value'] : salary
        };
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);    
worker1.showSalary();
console.log("New experience: " + worker1.setExp);
console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.setExp);
console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);    
worker2.setExp = 1.5;
console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName); 
worker3.setExp = 1.5;
console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());

let sal1 = worker1.sortSalaries();
let sal2 = worker2.sortSalaries();
let sal3 = worker3.sortSalaries();
let arr = [sal1, sal2, sal3];


function sortBySalary(salary_value) {
    return((a, b) => a[salary_value] > b[salary_value] ? 1 : -1);
}
arr.sort(sortBySalary('salary_value'));
console.log('Sorted salary: ') + arr.forEach(worker => console.log(worker.worker_fullName + ': ' + worker.salary_value));