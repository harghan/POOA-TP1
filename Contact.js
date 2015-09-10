var Contact = Contact || {};

Contact = ( function (self) {

    self.Contact = function (gender, firstName, lastName) {

        var private_attr;
        var gender;
        var firstName;
        var lastName;
        var uniqueID;

        this.lastName = function () {
            return lastName;
        };

        this.firstName = function () {
            return firstName;
        };

        this.gender = function () {
            return gender;
        };

        this.uniqueID = function() {
            return uniqueID;
        };

        this.get_attr = function () {
            return private_attr;
        };

        this.set_attr = function (new_value) {
            private_attr = new_value;
        };

        var process = function () {
        };

        function RandomID () {
            "xxxx - xxxx - xxxx - xxxx - xxxx ".replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        var init = function (gender, firstName, lastName) {
            this.gender = gender;
            this.firstName = firstName;
            this.lastName = lastName;
            this.uniqueID = RandomID();
        };

        init(gender, firstName, lastName, uniqueID);
    };

    self.Gender = {
        MR: 0,
        MRS: 1
    }


    return self;

}(Contact || {}) );