//继承练习
function BaseObj(){
    this.nameA = "BaseObj1";
    this.age = 18;
    this.sayHello = ()=>{
        console.log('hell');
    }
}
var baseObj = new BaseObj();
console.log(BaseObj.nameA);
baseObj.sayHello();
function sub(){
    this.name = "sub";
}
console.log(sub.name);

