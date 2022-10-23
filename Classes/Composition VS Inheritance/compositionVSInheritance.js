"use strict";
class VS_User {
    constructor(name) {
        this.name = name;
    }
}
// Inheritance
class VS_Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const vs_users = new VS_Users();
vs_users.push(new VS_User("A"));
vs_users.push(new VS_User("B"));
console.log(vs_users.toString());
// Composition
class VS_UserList {
    push(u) {
        this.users.push(u);
    }
}
class VS_Payment {
}
// not good practice
class VS_UserWithPayment extends VS_Payment {
}
// good practice
class VS_UserWithPayment2 {
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
}
/*
    inheritance (extends) better to use for inheritance in borders of 1 domain
      if we have user and user with credentials - that`s good to extends!
      Because domain of user just completed with some credentials.

      class VS_Users extends Array<VS_User> - bad practice, because it`s big utilitary class.
      in this case we get bundle of useless methods and properties.

      class VS_Errors extends Error - good practice, because it`s small class.
      in this case, just few usefully methods for our Errors class.

     Composition better use when our domains crossing. Example:

       class VS_UserWithPayment2 {
           user: VS_User;
           payment: VS_Payment;

           constructor(user: VS_User, payment: VS_Payment) {
               this.user = user;
               this.payment = payment;
           }
     }
*/
