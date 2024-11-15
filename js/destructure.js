const person={
    name:"khushi",
    age:19,
    salary:0
}
// before destructure
console.log(person.name);
console.log(person.age);
console.log(person.salary);

// destructuring of objects ..
const{name,age,salary}=person;
console.log(name);
console.log(age);
console.log(salary);

// destructuring on array
const emp=['abc',2,true,"xyz"];
// before destructure
console.log(emp[0]);
// destructuring of objects ..
const [namee,rollno,eligible,work]=emp;
console.log(namee);
console.log(rollno);