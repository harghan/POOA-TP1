var Contact = Contact || {};

Contact = ( function (self) {

    self.Contact = function (gender, firstName, lastName) {

        var private_attr;
        var gender;
        var firstName;
        var lastName;

        this.lastName = function () {
            return lastName;
        }

        this.firstName = function () {
            return firstName;
        }

        this.gender = function () {
            return gender;
        }

        this.get_attr = function () {
            return private_attr;
        };

        this.set_attr = function (new_value) {
            private_attr = new_value;
        };

        var process = function () {
        };

        var init = function (gender, firstName, lastName) {
            this.gender = gender;
            this
            firstName = firstName;
            this.lastName = lastName;
        }

        init(gender, firstName, lastName);
    };

    self.Gender = {
        MR: 0,
        MRS: 1
    }


    return self;

}(Contact || {}) );