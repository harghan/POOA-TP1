/**
 * Created by Harghan on 18/09/2015.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.FromNameSearchStrategy = function (aFirstName, aLastName) {
        var firstName, lastName;
        this.search = function () {
            var contacts = [];

            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];

                if (contact.firstName() === firstName &&
                    contact.lastName() === lastName) {
                    contacts.push(contact);
                }
            }

            if (contacts.length === 0) {
                return null;
            } else if (contacts.length === 1) {
                return contacts[0];
            }
            return contacts;
        };
        var init = function (aFirstName, aLastName) {
            firstName = aFirstName;
            lastName = aLastName;
        };

        init(aFirstName, aLastName);
    };

    self.FromMailSearchStrategy = function (aMail) {
        var mail;
        this.search = function () {
            var contacts = [];
            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];
                var mails = contact.mails();
                for (var i = 0; i < mails.length; i++) {
                    if (mails[i].address() === mail) {
                        contacts.push(contact);
                    }
                }
            }

            if (contacts.length === 0) {
                return null;
            } else if (contacts.length === 1) {
                return contacts[0];
            }
            return contacts;
        };
        var init = function (aMail) {
            mail = aMail;
        };

        init(aMail);
    };

    self.FromPhoneSearchStrategy = function (aPhone) {
        var phone;
        this.search = function () {
            var contacts = [];
            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];
                var phones = contact.phones();
                for (var i = 0; i < phones.length; i++) {
                    if (phones[i].number() === phone) {
                        contacts.push(contact);
                    }
                }
            }

            if (contacts.length === 0) {
                return null;
            } else if (contacts.length === 1) {
                return contacts[0];
            }
            return contacts;
        };
        var init = function (aPhone) {
            phone = aPhone;
        };

        init(aPhone);
    };
    return self;

}(Contact || {}));