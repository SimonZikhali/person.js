const{Person}= require("../src/oop_person_src")
let person = new Person('Ryan',30,'male',['being a hardarse','ssd hard drves'])
let greeting = person.Hello()

describe("Person",function(){
    it("should show name",function(){
    expect (greeting).toEqual('Hello, My name is Ryan and I am 30 year old My interests are being a hardarse,ssd hard drves' )
        
    })
    
})    