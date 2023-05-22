//Polyfill = Sort of Browser Fallback (If Browser don't have own bind then creating our own bind method is called Polyfil)

let name = {
  firstName: "Akshay",
  lastName: "Kumar",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + ", " + hometown + ", " + state
  );
};

let printMyName = printName.bind(name, "Dehradun");
printMyName("Uttarakhand");

/*
1)Since all functions in JS has access to .bind() method, so we need all functions to have 
access to .myBind() method.
Hence, we write myBind function on Function Prototype.

2)bbind method returns a function hence, return function(){...}

3) Reference Object can be accessed using this operator inside myBind().

4) Arguments passed to functions are accessed using args parameter.

5) [...params, ...args] returns an array, hence apply method is used.
*/

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
let printMyName2 = printName.myBind(name, "Dehradun", "Uttarakhand");
printMyName2();
