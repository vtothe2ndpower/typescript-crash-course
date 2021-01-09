var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + ' is now registered!');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice!');
    };
    return User;
})();
var Member = (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        _super.call(this, name, email, age);
        this.id = id;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
})(User);
// let john = new User('John Doe', 'john@yahoo.com', 32);
// console.log(john.age);
// john.register();
var mike = new Member(1, 'Mike Smith', 'mike@gmail.com', 23);
mike.payInvoice();
