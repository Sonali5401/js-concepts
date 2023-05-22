let name = {
  firstName: "Akshay",
  lastName: "Kumar",
  printFullName: function () {
    console.log(this.firstName + "" + this.lastName);
  },
};

name.printFullName();

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

name.printFullName.call(name2);

// Generic Way of doing same as above

let name3 = {
  firstName: "Akshay",
  lastName: "Kumar",
};

let printFullName2 = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

printFullName2.call(name3, "Dehradun", "Uttrakhand");

let name4 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullName2.call(name4, "Mumbai", "Maharashtra");
