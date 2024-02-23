const student1 = {
  firstName: "Anne",
  email: "anne@gmail.com",
  phone: "111-111-1111",
  age: 15,
  isActive: true,
  address: {
    mailingAddress: "123 Main St",
    shippingAddress: "321 Wall St",
  },
  enrollment: ["cs101", "math1a", "chem2a"],
  gradYear: null,

  // methods: function that belongs to an object
  getEmail: function () {
    return this.email;
  },

  // different way of declaring a method (ES6 method notation)
  getValue(key) {
    return this[key];
  },
};

student1.age = "25";
student1.gradYear = "2023";
console.log(student1.gradYear);
console.log(student1.age);
