/**
 * Created by Harghan on 18/09/2015.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.AddCommand = function () {
        var contacts = [];
        this.execute = function (aContact) {
            Contact.Contacts.instance().add(aContact);
            contacts.push(aContact);
        };

        this.undo = function () {
            var contact = contacts.pop();
            Contact.Contacts.instance().remove(contact.id());
        };
    };

    self.RemoveCommand = function () {
        var contacts = [];
        this.execute = function (contactId) {
            var contact = Contact.Contacts.instance().get(contactId);
            Contact.Contacts.instance().remove(contactId);
            contacts.push(contact);
        };

        this.undo = function () {
            var contact = contacts.pop();
            Contact.Contacts.instance().add(contact);
        };
    };

    return self;

}(Contact || {}));