class Person{
constructor(name,age,gender,interests){
   this.name = name;
   this.age = age;
   this.gender = gender;
   this.interests = interests;
  }
  Hello(){
  return('Hello, My name is '+this.name +' and I am '+this.age +' year old My interests are '+this.interests)
  }
}
let person = new Person('Ryan',30,'male',['being a hardarse','ssd hard drves'])

let greeting = person.Hello()

console.log(greeting)