let name = {
  firstName: "Akshay",
  lastName: "Kumar",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

printFullName.apply(name, ["Dehradun", "Uttrakhand"]);

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);
