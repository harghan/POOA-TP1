/**
 * Created by Harghan on 11/09/2015.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Contacts = {
        listSize: 0,
        list: {},
        instance: function () {
            return Contact.Contacts;
        },
        clear: function () {
            Contact.Contacts.listSize = 0;
            Contact.Contacts.list = {};
        },
        size: function () {
            return Contact.Contacts.listSize;
        },
        add: function (aContact) {
            Contact.Contacts.list[aContact.id()] = aContact;
            Contact.Contacts.listSize++;
        },
        get: function (aContactId) {
            return Contact.Contacts.list[aContactId];
        },
        getFromName: function (aFirstName, aLastName) {
            var contacts = [];

            for (var c in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[c];

                if (contact.firstName() === aFirstName &&
                    contact.lastName() === aLastName) {

                    contacts.push(contact);
                }
            }

            if (contacts.length === 0) {
                return null;
            } else {
                return contacts;
            }
        },
        remove: function (aContactId) {
            delete Contact.Contacts.list[aContactId];
            Contact.Contacts.listSize--;
        }
    };

    return self;

}(Contact || {}));