let name1 = {
  firstName: "Akshay",
  lastName: "Kumar",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

let printName1 = printFullName.bind(name1, "Dehradun", "Uttrakhand");

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

let printName2 = printFullName.bind(name2, "Mumbai", "Maharashtra");

printName1();
printName2();
