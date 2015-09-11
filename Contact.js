var Contact = Contact || {};

Contact = (function (self) {

    self.Contact = function(aGender, aFirstName, aLastName) {

        var gender, firstName, lastName, mails = [], phones = [], uniqueID = 0;

        this.lastName = function () {
            return lastName;
        };
        this.firstName = function () {
            return firstName;
        };
        this.gender = function () {
            return gender;
        };
        this.mails = function() {
            return mails;
        };
        this.phones = function () {
            return phones;
        };
        this.set_proMails = function (address) {
            mails.push(new Contact.Mail(address, Contact.MailCategory.PRO));
        };
        this.set_mobileProPhones = function (number) {
            var TelCat = Contact.PhoneType.MOBILE,
                TelType = Contact.PhoneCategory.PRO;
            phones.push(new Contact.Phone(number, TelCat, TelType));
        };

        var process = function () {
        };

        function RandomID() {
            "xxxx - xxxx - xxxx - xxxx - xxxx ".replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        var init = function (aGender, aFirstName, aLastName) {
            gender = aGender;
            firstName = aFirstName;
            lastName = aLastName;
            uniqueID = new RandomID();
        };

        init(aGender, aFirstName, aLastName, uniqueID);
    };

    self.Gender = {
        MR: 0,
        MRS: 1
    };

    return self;

}(Contact || {}));