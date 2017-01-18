var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var p = new Person("ravi");
console.log(p.name);
