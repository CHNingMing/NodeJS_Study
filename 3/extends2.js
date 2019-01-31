var util = require('util');
//继承
function Base(){
    console.log('实例化 Base');
    this.name = 'Base_Supper';
    this.baseMethod = () => {
        console.log("Base 父类方法");
    }
}
function BaseA(){
    this.name = "BaseA"
    this.childMethod = () =>{
        console.log("子类方法");
    }
    this.sayHello = () =>{
         console.log('子类重写方法');
    }
}
Base.prototype.sayHello = () =>{
    console.log('sayHello:');
}
Base.prototype.baseFlag = true;
//继承
util.inherits(BaseA,Base);
var base = new Base();
var base_a = new BaseA();
// console.log("base:"+base.name);
// console.log("baseA:"+base_a.name);
// base.baseMethod();
base.sayHello();
base_a.sayHello();
// console.log(base.baseFlag);
// console.log(base_a.baseFlag);
console.log(util.inspect(BaseA));