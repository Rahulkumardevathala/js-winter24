const user1 = {
  name: "",
  email: "",
  website: "",
  age: 0,
  phone: {
    home: "",
    cell: "",
  },
  cart: [],

  getName: function () {
    return this.name;
  },

  getPhone: function (phoneType) {
    return this.phone[phoneType];
  },

  getEmail: function () {
    return this.email;
  },

  addToCart: function (item) {
    if (!this.cart.includes(item)) {
      this.cart.push(item);
      return true;
    } else {
      return false;
    }
  },

  removeFromCart: function (item) {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  },

  addNewPhone: function (phoneType, phoneNumber) {
    this.phone[phoneType] = phoneNumber;
  },

  updateNewPhone: function (phoneType, newPhoneNumber) {
    if (this.phone.hasOwnProperty(phoneType)) {
      this.phone[phoneType] = newPhoneNumber;
    }
  },
};

// Example usage:
user1.name = "Rahul kumar devathala";
user1.email = "rahulkumar@gmail.com";
user1.website = "www.rahulkumar.com";
user1.age = 25;
user1.phone.home = "1234567890";
user1.phone.cell = "9999889999";
user1.cart.push("milk");

console.log(user1.getName());
console.log(user1.getPhone("home"));
console.log(user1.getEmail());

console.log(user1.addToCart("milk"));
console.log(user1.addToCart("water"));
console.log(user1.cart);

user1.removeFromCart("milk");
console.log(user1.cart);

user1.addNewPhone("work", "111-222-3333");
console.log(user1.getPhone("work"));

user1.updateNewPhone("cell", "999-888-7777");
console.log(user1.getPhone("cell"));
