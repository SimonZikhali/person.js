class Person{
constructor(Name,Age,Gender,Interests){
   this.name = Name;
   this.age = Age;
   this.gender = Gender;
   this.interests = Interests;
  }
  Hello(){
  return('Hello, My name is '+this.name +' and I am '+this.age +' year old My interests are '+this.interests)
  }
}
let person = new Person('Ryan',30,'male',['being a hardarse','ssd hard drves'])

let greeting = person.Hello()

console.log(person.Hello())