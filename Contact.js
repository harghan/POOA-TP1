var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Contact = function(aGender, aFirstName, aLastName) {

        var gender, firstName, lastName, mails = [], phones = [], id = "";

        this.lastName = function () {
            return lastName;
        };
        this.firstName = function () {
            return firstName;
        };
        this.gender = function () {
            return gender;
        };
        this.mails = function () {
            return mails;
        };
        this.phones = function () {
            return phones;
        };
        this.addMail = function (mail) {
            mails.push(mail);
        };
        this.addPhone = function (phone) {
            phones.push(phone);
        };
        this.id = function () {
            return id;
        };
        var init = function (aGender, aFirstName, aLastName) {
            gender = aGender;
            firstName = aFirstName;
            lastName = aLastName;
            id = "xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c ===
                    "x" ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };

        init(aGender, aFirstName, aLastName, id);
    };

    self.Gender = {
        MR: 0,
        MRS: 1
    };

    return self;

}(Contact || {}));