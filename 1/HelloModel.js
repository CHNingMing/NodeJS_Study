function fun(){
    var name;
    this.sayHello = function(){
        console.log('sayHello');
    }
    this.sayHello1 = () => {
        console.log('sayHello1');
    }
    this.getName = () => {
        return name;
    }
    this.setName = (nameVal) => {
        name = nameVal;
    }
}
module.exports = fun;